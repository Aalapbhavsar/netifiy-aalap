import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['React Projects', 'Full Stack Projects', 'Frontend Projects'],
      default: 'Frontend Projects',
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      default: '',
    },
    techStack: [
      {
        type: String,
        required: true,
      },
    ],
    githubLink: {
      type: String,
      default: '',
    },
    liveLink: {
      type: String,
      default: '',
    },
    views: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
