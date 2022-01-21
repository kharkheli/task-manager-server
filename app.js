const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('express-async-errors')

const connectDb = require('./db/connect')
const dayRouter = require('./routes/day')

app.use(express.json())
app.use(cors())

app.use('/api/v1/days', dayRouter)

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'welcome' })
})

const port = process.env.PORT || 3001

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log('server is listening on port ' + port)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
