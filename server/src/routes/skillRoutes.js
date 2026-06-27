import express from 'express';
import protect from '../middleware/auth.js';
import {
  getAllSkills,
  getSkillsByCategory,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController.js';

const router = express.Router();

// Public routes
router.get('/', getAllSkills);
router.get('/category/:category', getSkillsByCategory);

// Protected routes
router.post('/', protect, createSkill);
router.put('/:id', protect, updateSkill);
router.delete('/:id', protect, deleteSkill);

export default router;
