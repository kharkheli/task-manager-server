const Day = require('../model/day')

const getDays = async (req, res) => {
  try {
    const days = await Day.find({})
    res.status(200).json({ days })
  } catch (error) {
    res.status(500).json({ msg: "something went wrong couln't get the data" })
  }
}

const addDay = async (req, res) => {
  const { day } = req.body
  console.log(day)
  await Day.create({ ...day })
  res.status(201).json({ msg: 'day has been added' })
}

const editTask = async (req, res) => {
  const { tasks, day } = req.body
  await Day.findOneAndUpdate({ day }, { tasks })
  res.status(204).json({ msg: 'tasks have been updated successfuly' })
}

const deleteAll = async (req, res) => {
  await Day.deleteMany({})
  res.status(202).json({ msg: 'everything has been deleted' })
}

module.exports = {
  getDays,
  addDay,
  editTask,
  deleteAll,
}
