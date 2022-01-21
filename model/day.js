const mongoose = require('mongoose')

const daySchema = mongoose.Schema({
  day: {
    type: String,
    required: [true, 'day is required'],
    unique: true,
  },
  createdAt: {
    type: Number,
    required: [true, 'exact time is required'],
    unique: true,
  },
  tasks: {
    type: Array,
    default: [],
  },
})

module.exports = mongoose.model('dates', daySchema)
