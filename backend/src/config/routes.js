const express = require('express')

module.exports = function(server){

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TASK Routes
    const taskService = require('../api/task/taskService')
    taskService.register(router, '/task')
}