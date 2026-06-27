import express from 'express';
import protect from '../middleware/auth.js';
import { getProfile, updateProfile, updateProfileImage, updateResume } from '../controllers/profileController.js';

const router = express.Router();

// Public routes
router.get('/', getProfile);

// Protected routes
router.put('/', protect, updateProfile);
router.put('/image', protect, updateProfileImage);
router.put('/resume', protect, updateResume);

export default router;
