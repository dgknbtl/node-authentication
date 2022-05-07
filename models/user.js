const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
      minlength: 2,
   },
   email: {
      type: String,
      require: true,
   },
   password: {
      type: String,
      require: true,
      minlength: 6,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   tasks: [],
})

UserSchema.pre('save', function(next) {
   const user = this
   if (!user.isModified('password')) return next()

   bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function(err, hash) {
         if (err) return next(err)
         user.password = hash
         next()
      })
   })
})

UserSchema.methods.comparePassword = function(candicatePass, cb) {
   bcrypt.compare(candicatePass, this.password, function(err, result) {
      if (err) cb(err)
      cb(null, result)
   })
}

UserSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('User', UserSchema)
