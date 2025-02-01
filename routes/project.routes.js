const express = require("express");
const {
  createProject,
  getProjects,
  getProjectById,
  deleteProjectById,
} = require("../controller/project.controller.js");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProjects);
router.get("/:id", authMiddleware, getProjectById);
router.delete("/:id", authMiddleware, deleteProjectById);

module.exports = router;
