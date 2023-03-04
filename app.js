const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Task Manager API");
});

app.use("/api/v1/tasks", tasks);

app.all("*", (req, res) => {
	res.status(404).send("Page not found");
});

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is up on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
