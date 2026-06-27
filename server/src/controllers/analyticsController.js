import Analytics from '../models/Analytics.js';
import Message from '../models/Message.js';
import Project from '../models/Project.js';

// Get today's date in YYYY-MM-DD format
const getTodayDateString = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// @desc    Record analytics event (visitor, download, or projectView)
// @route   POST /api/analytics/event
// @access  Public
export const recordEvent = async (req, res) => {
  const { eventType } = req.body; // 'visitor', 'download', 'projectView'

  if (!['visitor', 'download', 'projectView'].includes(eventType)) {
    return res.status(400).json({ message: 'Invalid event type' });
  }

  try {
    const today = getTodayDateString();

    const update = {};
    if (eventType === 'visitor') update.visitors = 1;
    if (eventType === 'download') update.downloads = 1;
    if (eventType === 'projectView') update.projectViews = 1;

    const stats = await Analytics.findOneAndUpdate(
      { date: today },
      { $inc: update },
      { new: true, upsert: true }
    );

    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get dashboard analytics report
// @route   GET /api/analytics/report
// @access  Private
export const getAnalyticsReport = async (req, res) => {
  try {
    // 1. Get total stats by aggregating Analytics documents
    const aggregateTotals = await Analytics.aggregate([
      {
        $group: {
          _id: null,
          totalVisitors: { $sum: '$visitors' },
          totalDownloads: { $sum: '$downloads' },
          totalProjectViews: { $sum: '$projectViews' },
        },
      },
    ]);

    const totals = aggregateTotals[0] || {
      totalVisitors: 0,
      totalDownloads: 0,
      totalProjectViews: 0,
    };

    // 2. Get total contact requests
    const totalContactRequests = await Message.countDocuments({});
    const unreadContactRequests = await Message.countDocuments({ read: false });

    // 3. Get total projects
    const totalProjects = await Project.countDocuments({});

    // 4. Get last 30 days of data for graphs
    const chartData = await Analytics.find({})
      .sort({ date: -1 })
      .limit(30);
    
    // Sort ascending for chronological graph drawing
    chartData.reverse();

    // 5. Get top viewed projects
    const topProjects = await Project.find({})
      .sort({ views: -1 })
      .limit(5)
      .select('title views category');

    res.json({
      totals: {
        visitors: totals.totalVisitors,
        downloads: totals.totalDownloads,
        projectViews: totals.totalProjectViews,
        messages: totalContactRequests,
        unreadMessages: unreadContactRequests,
        projects: totalProjects,
      },
      chartData,
      topProjects,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
