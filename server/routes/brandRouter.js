const Router = require('express')
const router = new Router()//СОЗДАЕМ ОБЬЕКТ ЭТОГО РОУТЕРА
const brandController = require('../controllers/brandController')

router.post('/', brandController.create)//СОЗДАНИЕ БРЕНДОВ
router.get('/', brandController.getAll)//ПОЛУЧЕНИЕ БРЕНДОВ

module.exports = router