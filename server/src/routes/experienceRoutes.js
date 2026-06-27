import express from 'express';
import protect from '../middleware/auth.js';
import {
  getAllExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../controllers/experienceController.js';

const router = express.Router();

// Public routes
router.get('/', getAllExperience);

// Protected routes
router.post('/', protect, createExperience);
router.put('/:id', protect, updateExperience);
router.delete('/:id', protect, deleteExperience);

export default router;
