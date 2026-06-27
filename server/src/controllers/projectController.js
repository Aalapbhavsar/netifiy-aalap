import Project from '../models/Project.js';
import { uploadFile, deleteFile } from '../config/cloudinary.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
export const createProject = async (req, res) => {
  try {
    const { title, description, category, techStack, githubLink, liveLink, featured } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a project image' });
    }

    const uploadResult = await uploadFile(req.file);

    const project = new Project({
      title,
      description,
      category,
      image: uploadResult.url,
      techStack: Array.isArray(techStack) ? techStack : techStack.split(',').map(item => item.trim()),
      githubLink,
      liveLink,
      featured: featured === 'true' || featured === true,
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
export const updateProject = async (req, res) => {
  try {
    const { title, description, category, techStack, githubLink, liveLink, featured } = req.body;
    const project = await Project.findById(req.params.id);

    if (project) {
      project.title = title || project.title;
      project.description = description || project.description;
      project.category = category || project.category;
      project.githubLink = githubLink !== undefined ? githubLink : project.githubLink;
      project.liveLink = liveLink !== undefined ? liveLink : project.liveLink;
      project.featured = featured !== undefined ? (featured === 'true' || featured === true) : project.featured;

      if (techStack) {
        project.techStack = Array.isArray(techStack) ? techStack : techStack.split(',').map(item => item.trim());
      }

      if (req.file) {
        // Upload new image
        const uploadResult = await uploadFile(req.file);
        
        // Delete old image if it's cloud-based
        if (project.image && !project.image.startsWith('/uploads')) {
          const publicId = project.image.split('/').pop().split('.')[0];
          await deleteFile(`portfolio/${publicId}`);
        } else if (project.image && project.image.startsWith('/uploads')) {
          const filename = project.image.split('/').pop();
          await deleteFile(filename);
        }

        project.image = uploadResult.url;
      }

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      // Delete image
      if (project.image && !project.image.startsWith('/uploads')) {
        const publicId = project.image.split('/').pop().split('.')[0];
        await deleteFile(`portfolio/${publicId}`);
      } else if (project.image && project.image.startsWith('/uploads')) {
        const filename = project.image.split('/').pop();
        await deleteFile(filename);
      }

      await project.deleteOne();
      res.json({ message: 'Project removed successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Increment project views
// @route   POST /api/projects/:id/view
// @access  Public
export const incrementProjectViews = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      project.views += 1;
      await project.save();
      res.json({ message: 'Project view incremented', views: project.views });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
