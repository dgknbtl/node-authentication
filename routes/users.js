const router = require('express').Router()
const {UserController} = require('../controllers')
const {forwardAuthenticated} = require('../middlewares/auth')

router.get('/', (req, res) => res.send('Users'))

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'))

router.get('/register', forwardAuthenticated, (req, res) => res.render('register'))

router.post('/login', UserController.authenticateUser)

router.post('/register', UserController.newUser)

router.get('/logout', UserController.logout)

module.exports = router
