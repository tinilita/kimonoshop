require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models.js')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index.js')//СООБЩАЕМ О НАШИХ РОУТЕРАХ
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())//ЧТО БЫ ПРИЛОЖЕНИЕ МОГЛО ПАРСИТЬ ДЖЕЙСОН ФОРМАТ
app.use('/api', router)

app.use(errorHandler)//ОБРАБОТЧИК ОШИБОК ДОЛЖЕН ИДТИ В САМОМ КОНЦЕ Middleware

/* ПРОВЕРКА В POSTMAN
app.get('/',(req, res) => {
    res.status(200).json({message: 'WORKING!!!'})
})
*/

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



