const LocalStrategy = require('passport-local').Strategy
const {UserService} = require('../services')
const bcrypt = require('bcrypt')

module.exports = function(passport) {
   passport.use(
      new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
         try {
            const user = await UserService.findOne('email', email)
            if (!user) {
               return done(null, false, {
                  message: 'That email is not registered.',
               })
            }

            await user.comparePassword(password, function(err, isMatch) {
               if (err) done(err)
               if (!isMatch) {
                  return done(null, false, {message: 'Password incorrect'})
               }
               return done(null, user)
            })
         } catch (err) {
            throw new Error(err)
         }
      })
   )
   passport.serializeUser((user, done) => {
      done(null, user.id)
   })
   passport.deserializeUser(async (id, done) => {
      const user = await UserService.find(id)
      if (!user) {
         done(err)
      }
      done(null, user)
   })
}
