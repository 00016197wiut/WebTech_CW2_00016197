const fs = require('fs')
// access global mock db file
const tasks = require('../../data/mock_db.json')

// write service method implementations
const tasks_service = {
    getAll() {
        return tasks
    }
}

module.exports = tasks_service