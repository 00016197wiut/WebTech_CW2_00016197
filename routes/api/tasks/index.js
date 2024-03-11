const express = require('express');

const router = express.Router();
const tasks_controller = require('../../../controllers/api/tasks');

// Define API routes
router.get('/', (req, res) => {
    tasks_controller.getAll(req, res);
});

module.exports = router;