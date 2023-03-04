const express = require("express");

const app = express();
const tasksRoutes = require("./routes/tasks");

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Task Manager API");
});

app.use("/api/v1/tasks", tasksRoutes);

app.all("*", (req, res) => {
	res.status(404).send("Page not found");
});

const port = 3000;
app.listen(port, console.log(`Server is up on port ${port}...`));
