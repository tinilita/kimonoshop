const Router = require('express')
const router = new Router()//СОЗДАЕМ ОБЬЕКТ ЭТОГО РОУТЕРА
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
//ОБЬЕДЕНИМ 4 РОУТЕРА В 1
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router