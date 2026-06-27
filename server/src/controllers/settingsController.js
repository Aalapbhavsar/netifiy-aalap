import Settings from '../models/Settings.js';
import { uploadFile } from '../config/cloudinary.js';

// @desc    Get dynamic website settings
// @route   GET /api/settings
// @access  Public
export const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({});
    if (!settings) {
      // Seed default settings document
      settings = new Settings({});
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update website settings
// @route   PUT /api/settings
// @access  Private
export const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({});
    if (!settings) {
      settings = new Settings({});
    }

    const { linkedin, github, instagram, email, aiPrompt } = req.body;

    if (settings.socialLinks) {
      if (linkedin !== undefined) settings.socialLinks.linkedin = linkedin;
      if (github !== undefined) settings.socialLinks.github = github;
      if (instagram !== undefined) settings.socialLinks.instagram = instagram;
      if (email !== undefined) settings.socialLinks.email = email;
    }

    if (aiPrompt !== undefined) {
      settings.aiPrompt = aiPrompt;
    }

    if (req.file) {
      // Resume upload
      const uploadResult = await uploadFile(req.file);
      settings.resumeUrl = uploadResult.url;
    }

    const updatedSettings = await settings.save();
    res.json(updatedSettings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
