require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models.js')
const PORT = process.env.PORT || 5000

const app = express()


const start = async () => {
    try {
        await sequelize.authenticate() //АВТОРИЗАЦИЯ В БД
        await sequelize.sync() //СВЕРКА СОСТОЯНИЯ БД СО СХЕМОЙ ДАННЫХ
        app.listen(PORT, () => console.log('Server started on port: ${PORT}'))
    } catch (e) {
        console.log(e)
    }
}

start()



