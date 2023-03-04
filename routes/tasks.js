const express = require('express');
const router = express.Router();
const {getALlTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks');

router.route('/').get(getALlTasks);
router.route('/:id').get(getTask);
router.route('/').post(createTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;