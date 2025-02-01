require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/user.routes.js");
const projectRoutes = require("./routes/project.routes.js");
const taskRoutes = require("./routes/task.routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  console.log("Hello Mayur ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
