const config = require('./config/index')
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const bodyParser = require('body-parser')
const userRouter = require('./routes/users')
const indexRouter = require('./routes/index')
const dashboardRouter = require('./routes/dashboard')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const passportConfig = require('./config/passport')
const cors = require('cors')
require('./mongo-connection')

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// passport config
passportConfig(passport)

// express session
app.use(
   session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
   })
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
   res.locals.success_message = req.flash('success_message')
   res.locals.error_message = req.flash('error_message')
   res.locals.error = req.flash('error')
   next()
})

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*')
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
   )
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   )
   next()
})

app.use(methodOverride('_method'))
app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/dashboard', dashboardRouter)

app.listen(config.port, () => {
   console.log(`Express now listening on port ${config.port}`)
})
