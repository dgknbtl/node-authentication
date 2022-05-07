const MongooseService = require('./MongooseService')
const TaskService = require('./TaskService')
const UserModel = require('../models/user')

class UserService extends MongooseService {
   async newTask(user, taskBody) {
      const newTask = await TaskService.insert({
         user,
         body: taskBody,
      })
      user.tasks.push(newTask)
      await user.save()
      return newTask
   }

   async removeTask(user, taskId) {
      try {
         await TaskService.removeOne('_id', taskId)
         const filteredTasks = await user.tasks.filter((task) => task._id != taskId)
         user.tasks = filteredTasks
         await user.save()
      } catch (error) {
         throw new Error(error)
      }
   }

   async updateTask(user, taskId) {
      try {
         const task = await TaskService.find(taskId)
         await TaskService.update(taskId, {
            isCompleted: !task.isCompleted,
         })
         const updatedTasks = await user.tasks.map((task) =>
            task._id == taskId ? {...task, isCompleted: !task.isCompleted} : task
         )
         user.tasks = updatedTasks
         await user.save()
      } catch (error) {
         throw new Error(error)
      }
   }
}

module.exports = new UserService(UserModel)
