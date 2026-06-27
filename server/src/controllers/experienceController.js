import Experience from '../models/Experience.js';

export const getAllExperience = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: -1, startDate: -1 });
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createExperience = async (req, res) => {
  try {
    const { title, company, description, startDate, endDate, isCurrentRole, order } = req.body;

    if (!title || !company || !startDate) {
      return res.status(400).json({ message: 'Title, company, and start date are required' });
    }

    const experience = new Experience({
      title,
      company,
      description,
      startDate,
      endDate,
      isCurrentRole,
      order,
    });

    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, description, startDate, endDate, isCurrentRole, order } = req.body;

    const experience = await Experience.findByIdAndUpdate(
      id,
      { title, company, description, startDate, endDate, isCurrentRole, order },
      { new: true }
    );

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByIdAndDelete(id);

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
