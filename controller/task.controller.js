const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTask = async (req, res) => {
  const { projectId } = req.params;
  const { title, description, status, assignedUserId } = req.body;

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        projectId,
        assignedUserId,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTasks = async (req, res) => {
  const { projectId } = req.params;

  try {
    const tasks = await prisma.task.findMany({
      where: { projectId },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status, assignedUserId } = req.body;

  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { title, description, status, assignedUserId },
    });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    await prisma.task.delete({
      where: { id: taskId },
    });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFilteredTasks = async (req, res) => {
  const { status, assignedUserId } = req.query;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        status: status ? status : undefined,
        assignedUserId: assignedUserId ? assignedUserId : undefined,
      },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getFilteredTasks,
};
