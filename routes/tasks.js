const express = require("express");
const router = express.Router();
const { getALlTasks, getTask, createTask, updateTask, deleteTask } = require("../controllers/tasks");

router.route("/").get(getALlTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
