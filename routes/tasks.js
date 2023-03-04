const express = require('express');
const router = express.Router();
const {getALlTasks} = require('../controllers/tasks');

router.route('/').get(getALlTasks);

module.exports = router;