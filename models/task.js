const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: {maxDepth: 1},
   },
   body: {
      type: String,
      required: true,
   },
   isCompleted: {
      type: Boolean,
      default: false,
   },
   createdAt: {type: Date, default: Date.now},
})

TaskSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Task', TaskSchema)
