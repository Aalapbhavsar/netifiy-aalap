import express from 'express';
import {
  submitMessage,
  getMessages,
  toggleReadStatus,
  deleteMessage,
} from '../controllers/contactController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .post(submitMessage)
  .get(protect, getMessages);

router.route('/:id')
  .delete(protect, deleteMessage);

router.route('/:id/read')
  .put(protect, toggleReadStatus);

export default router;
