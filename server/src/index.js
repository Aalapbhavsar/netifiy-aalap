import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import User from './models/User.js';
import Settings from './models/Settings.js';
import Profile from './models/Profile.js';
import Skill from './models/Skill.js';
import Experience from './models/Experience.js';
import Certification from './models/Certification.js';
import Content from './models/Content.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';
import contentRoutes from './routes/contentRoutes.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to Database
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Allows client requests from any host; change in production as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static upload files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/content', contentRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Aalap Bhavsar Portfolio API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const seedData = async () => {
  try {
    // Always delete old admin and re-create from .env so credentials stay in sync
    await User.deleteMany({});
    const username = process.env.ADMIN_USERNAME || 'aalap';
    const password = process.env.ADMIN_PASSWORD || 'aalap2610';

    const admin = new User({
      username,
      email: 'aalapbhavsar.26@gmail.com',
      password, // Pre-save hook encrypts this
    });
    await admin.save();
    console.log(`Admin user seeded — username: "${username}" / password: "${password}"`);

    // Seed default settings if none exist
    const settingsExist = await Settings.findOne({});
    if (!settingsExist) {
      const defaultSettings = new Settings({});
      await defaultSettings.save();
      console.log('Default settings seeded successfully.');
    }
  } catch (error) {
    console.error('Data seeding failed:', error.message);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await seedData();
});
