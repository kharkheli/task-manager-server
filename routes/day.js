const express = require('express')
const router = express.Router()
const { getDays, addDay, editTask, deleteAll } = require('../controler/day')

router.route('/').get(getDays).post(addDay).patch(editTask).delete(deleteAll)

module.exports = router
