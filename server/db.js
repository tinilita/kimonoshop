const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //НАЗВАНИЕ БД
    process.env.DB_USER, //ИМЯ ПОЛЬЗОВАТЕЛЯ
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)