import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Aalap Bhavsar',
      required: true,
    },
    headline: {
      type: String,
      default: 'Full Stack Developer | React | Next.js | Node.js',
    },
    bio: {
      type: String,
      default: '',
    },
    profileImage: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: 'hello@aalap.dev',
    },
    phone: {
      type: String,
      default: '+1 (555) 123-4567',
    },
    location: {
      type: String,
      default: 'San Francisco, CA',
    },
    resumeUrl: {
      type: String,
      default: '',
    },
    yearsOfExperience: {
      type: Number,
      default: 5,
    },
    projectsCompleted: {
      type: Number,
      default: 50,
    },
    clientsServed: {
      type: Number,
      default: 30,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
