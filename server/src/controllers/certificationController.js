import Certification from '../models/Certification.js';

export const getAllCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ order: -1, issueDate: -1 });
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCertification = async (req, res) => {
  try {
    const { title, issuer, issueDate, expiryDate, credentialId, credentialUrl, emoji, order } = req.body;

    if (!title || !issuer || !issueDate) {
      return res.status(400).json({ message: 'Title, issuer, and issue date are required' });
    }

    const certification = new Certification({
      title,
      issuer,
      issueDate,
      expiryDate,
      credentialId,
      credentialUrl,
      emoji,
      order,
    });

    await certification.save();
    res.status(201).json(certification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCertification = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, issuer, issueDate, expiryDate, credentialId, credentialUrl, emoji, order } = req.body;

    const certification = await Certification.findByIdAndUpdate(
      id,
      { title, issuer, issueDate, expiryDate, credentialId, credentialUrl, emoji, order },
      { new: true }
    );

    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }

    res.status(200).json(certification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCertification = async (req, res) => {
  try {
    const { id } = req.params;
    const certification = await Certification.findByIdAndDelete(id);

    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }

    res.status(200).json({ message: 'Certification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
