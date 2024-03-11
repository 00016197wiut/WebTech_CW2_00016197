
const tasks_service = require('../../../services/tasks/')

// mention the service's needed actions (methods)
const tasks_controller = {
    getAll(req, res) {
        res.json(tasks_service.getAll())
    }
}

module.exports = tasks_controller