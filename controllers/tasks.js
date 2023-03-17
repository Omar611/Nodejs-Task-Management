const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require("../errors/custom-error");

const getALlTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json(tasks);
});

const getTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findOne({ _id: req.params.id });
	if (!task) return next(createCustomError(`Task with id ${req.params.id} not found`, 404));
	res.status(200).json(task);
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
	if (!task) return next(createCustomError(`Task with id ${req.params.id} not found`, 404));
	res.status(200).json({ message: "Task updated" });
});

const deleteTask = asyncWrapper(async (req, res) => {
	const task = await Task.findByIdAndDelete(req.params.id);
	if (!task) return next(createCustomError(`Task with id ${req.params.id} not found`, 404));
	res.status(200).json({ message: "Task deleted" });
});

module.exports = {
	getALlTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
