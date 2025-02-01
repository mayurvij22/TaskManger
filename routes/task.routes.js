const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getFilteredTasks,
} = require("../controller/task.controller.js");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/:projectId/tasks", authMiddleware, createTask);
router.get("/:projectId/tasks", authMiddleware, getTasks);
router.put("/:taskId", authMiddleware, updateTask);
router.delete("/:taskId", authMiddleware, deleteTask);
router.get("/", authMiddleware, getFilteredTasks);

module.exports = router;
