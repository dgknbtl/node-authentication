const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

// console.log(config.dbUrl);

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
   console.log('we are connected to mongodb!')
})
