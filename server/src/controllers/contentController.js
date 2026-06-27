import Content from '../models/Content.js';

export const getAllContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContentBySection = async (req, res) => {
  try {
    const { section } = req.params;
    const content = await Content.find({ section });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContentByKey = async (req, res) => {
  try {
    const { key } = req.params;
    const content = await Content.findOne({ key });
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createContent = async (req, res) => {
  try {
    const { key, section, value, description } = req.body;

    if (!key || !section) {
      return res.status(400).json({ message: 'Key and section are required' });
    }

    const existingContent = await Content.findOne({ key });
    if (existingContent) {
      return res.status(400).json({ message: 'Content key already exists' });
    }

    const content = new Content({ key, section, value, description });
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { value, description } = req.body;

    const content = await Content.findByIdAndUpdate(
      id,
      { value, description },
      { new: true }
    );

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findByIdAndDelete(id);

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
