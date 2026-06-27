import express from 'express';
import protect from '../middleware/auth.js';
import {
  getAllContent,
  getContentBySection,
  getContentByKey,
  createContent,
  updateContent,
  deleteContent,
} from '../controllers/contentController.js';

const router = express.Router();

// Public routes
router.get('/', getAllContent);
router.get('/section/:section', getContentBySection);
router.get('/key/:key', getContentByKey);

// Protected routes
router.post('/', protect, createContent);
router.put('/:id', protect, updateContent);
router.delete('/:id', protect, deleteContent);

export default router;
