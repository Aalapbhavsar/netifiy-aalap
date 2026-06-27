import Profile from '../models/Profile.js';

export const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
      await profile.save();
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, headline, bio, email, phone, location, yearsOfExperience, projectsCompleted, clientsServed } = req.body;
    
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }

    if (name) profile.name = name;
    if (headline) profile.headline = headline;
    if (bio !== undefined) profile.bio = bio;
    if (email) profile.email = email;
    if (phone) profile.phone = phone;
    if (location) profile.location = location;
    if (yearsOfExperience) profile.yearsOfExperience = yearsOfExperience;
    if (projectsCompleted) profile.projectsCompleted = projectsCompleted;
    if (clientsServed) profile.clientsServed = clientsServed;

    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfileImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ message: 'Image URL is required' });
    }

    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }
    profile.profileImage = imageUrl;
    await profile.save();

    res.status(200).json({ message: 'Profile image updated', profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateResume = async (req, res) => {
  try {
    const { resumeUrl } = req.body;
    if (!resumeUrl) {
      return res.status(400).json({ message: 'Resume URL is required' });
    }

    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }
    profile.resumeUrl = resumeUrl;
    await profile.save();

    res.status(200).json({ message: 'Resume updated', profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
