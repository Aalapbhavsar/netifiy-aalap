import express from 'express';
import { getSettings, updateSettings } from '../controllers/settingsController.js';
import protect from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.route('/')
  .get(getSettings)
  .put(protect, upload.single('resume'), updateSettings);

export default router;
