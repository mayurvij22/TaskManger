const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProject = async (req, res) => {
  const { name, description, status } = req.body;

  try {
    const project = await prisma.project.create({
      data: { name, description, status, userId: req.user.id },
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjects = async (req, res) => {
  const projects = await prisma.project.findMany({
    where: { userId: req.user.id },
  });
  res.json(projects);
};

const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.userId !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to access this project" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await prisma.project.findUnique({ where: { id } });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.userId !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this project" });
    }

    await prisma.project.delete({ where: { id } });

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  deleteProjectById,
  getProjectById,
};
