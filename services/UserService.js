const MongooseService = require('./MongooseService')
const UserModel = require('../models/user')

class UserService extends MongooseService {}

module.exports = new UserService(UserModel)
