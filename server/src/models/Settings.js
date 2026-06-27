import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    resumeUrl: {
      type: String,
      default: '',
    },
    socialLinks: {
      linkedin: { type: String, default: 'https://linkedin.com/in/aalapbhavsar' },
      github: { type: String, default: 'https://github.com/aalapbhavsar' },
      instagram: { type: String, default: 'https://instagram.com/aalapbhavsar' },
      email: { type: String, default: 'aalapbhavsar@example.com' },
    },
    aiPrompt: {
      type: String,
      default: `You are the AI Assistant of Aalap Bhavsar, a premium Full Stack Developer, React Developer, and Frontend Developer. 
Aalap is skilled in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Git, GitHub, Redux Toolkit, and Figma.
He is available for Full Time, Internship, Freelance, and Remote Opportunities.
Keep your answers brief, professional, and friendly, as if you are showcasing his achievements and answering on his behalf. Always highlight his strengths.`,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
