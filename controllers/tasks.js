const Task = require("../models/Task");

const getALlTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json(tasks);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

const getTask = async (req, res) => {
	try {
		const task = await Task.find({ _id: req.params.id });
		if (!task) return res.status(404).json({ error: "Task not found" });
		res.status(200).json(task);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

const updateTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
		if (!task) return res.status(404).json({ error: "Task not found" });
		res.status(200).json({ message: "Task updated" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

const deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task) return res.status(404).json({ error: "Task not found" });
		res.status(200).json({ message: "Task deleted" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

module.exports = {
	getALlTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
