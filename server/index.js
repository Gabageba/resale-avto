require ('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require("path");
const models = require('./models/models')


const PORT = process.env.PORT || 5000

const app = express() // запуск приложения
app.use(cors()) //
app.use(express.json()) //чтобы парсить json
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate() // подключение к бд
    await sequelize.sync() //сверяет состояние бд со схемой
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()