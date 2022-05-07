const {UserService, TaskService} = require('../services')

module.exports = {
   newTask,
   getTasks,
   removeTask,
   updateTask,
}

// create a new task
async function newTask(req, res) {
   try {
      let messages = []
      const {task} = req.body

      if (!task) messages.push({body: 'Please, enter a task...'})
      if (messages.length) return res.render('dashboard', {messages, name: req.user.name})

      await UserService.newTask(req.user, task)
      req.flash('success_message', 'The task was created successfully.')
      return res.status(200).redirect(303, '/dashboard')
   } catch (error) {
      res.status(404).send(`The task is not found!`)
   }
}

async function getTasks(req, res, next) {
   try {
      const {name, tasks} = req.user
      return res.render('dashboard', {
         name,
         tasks,
      })
   } catch (error) {
      res.status(404).send(`The task is not found!`)
   }
}

// remove a task
async function removeTask(req, res) {
   try {
      await UserService.removeTask(req.user, req.params.taskId)
      req.flash('success_message', 'The task was removed.')
      return res.status(200).redirect(303, '/dashboard')
   } catch (error) {
      res.status(404).send(`The task is not found!, ${error}`)
   }
}

// update a task
async function updateTask(req, res) {
   try {
      await UserService.updateTask(req.user, req.params.taskId)
      return res.status(200).redirect(303, '/dashboard')
   } catch (error) {
      res.status(404).send(`The task is not found!`)
   }
}
