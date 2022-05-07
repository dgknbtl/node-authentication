const MongooseService = require('./MongooseService')
const TaskModel = require('../models/task')

class TaskService extends MongooseService {}

module.exports = new TaskService(TaskModel)
