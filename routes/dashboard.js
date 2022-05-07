const router = require('express').Router()
const {DashboardController} = require('../controllers')
const {ensureAuthenticated} = require('../middlewares/auth')

router.get('/', ensureAuthenticated, DashboardController.getTasks)

router.post('/', ensureAuthenticated, DashboardController.newTask)

// router.get('/:taskId', ensureAuthenticated, DashboardController.getTask)

router.delete('/:taskId', ensureAuthenticated, DashboardController.removeTask)

router.patch('/:taskId', ensureAuthenticated, DashboardController.updateTask)

module.exports = router
