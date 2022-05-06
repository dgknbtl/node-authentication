const router = require('express').Router()
const {ensureAuthenticated} = require('../middlewares/auth')

router.get('/', (req, res) => {
   res.send('Hello')
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
   res.render('dashboard', {
      name: req.user.name,
   })
})

module.exports = router
