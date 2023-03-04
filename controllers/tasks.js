const getALlTasks = (req, res) => {
	res.send("Get all tasks");
};

const getTask = (req, res) => {
	res.json(req.params.id);
};

const createTask = (req, res) => {
	res.json(req.body);
};

const updateTask = (req, res) => {
	res.send("Update task");
};

const deleteTask = (req, res) => {
	res.send("Delete task");
};

module.exports = { 
	getALlTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask
 };
