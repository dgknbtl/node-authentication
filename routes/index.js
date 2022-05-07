const router = require('express').Router()

router.get('/', (req, res) => {
   res.redirect('/users/login')
})

module.exports = router
