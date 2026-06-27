import express from 'express';
import protect from '../middleware/auth.js';
import {
  getAllCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
} from '../controllers/certificationController.js';

const router = express.Router();

// Public routes
router.get('/', getAllCertifications);

// Protected routes
router.post('/', protect, createCertification);
router.put('/:id', protect, updateCertification);
router.delete('/:id', protect, deleteCertification);

export default router;
