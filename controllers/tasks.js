const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getALlTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json(tasks);
});

const getTask = asyncWrapper(async (req, res) => {
	const task = await Task.findOne({ _id: req.params.id });
	if (!task) return res.status(404).json({ error: "Task not found" });
	res.status(200).json(task);
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
	if (!task) return res.status(404).json({ error: "Task not found" });
	res.status(200).json({ message: "Task updated" });
});

const deleteTask = asyncWrapper(async (req, res) => {
	const task = await Task.findByIdAndDelete(req.params.id);
	if (!task) return res.status(404).json({ error: "Task not found" });
	res.status(200).json({ message: "Task deleted" });
});

module.exports = {
	getALlTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
