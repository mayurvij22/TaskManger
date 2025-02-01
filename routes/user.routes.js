const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controller/user.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/:id", authMiddleware, deleteUser);
router.put("/:id", authMiddleware, updateUser);
router.get("/", getUsers);

module.exports = router;
