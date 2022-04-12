const Router = require('express')
const router = new Router()//СОЗДАЕМ ОБЬЕКТ ЭТОГО РОУТЕРА
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router