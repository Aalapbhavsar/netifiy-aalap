import express from 'express';
import { recordEvent, getAnalyticsReport } from '../controllers/analyticsController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/event', recordEvent);
router.get('/report', protect, getAnalyticsReport);

export default router;
