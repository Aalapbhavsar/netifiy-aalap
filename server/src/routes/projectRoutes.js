import express from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  incrementProjectViews,
} from '../controllers/projectController.js';
import protect from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(protect, upload.single('image'), createProject);

router.route('/:id')
  .get(getProjectById)
  .put(protect, upload.single('image'), updateProject)
  .delete(protect, deleteProject);

router.post('/:id/view', incrementProjectViews);

export default router;
