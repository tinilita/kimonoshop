const Router = require('express')
const router = new Router()//СОЗДАЕМ ОБЬЕКТ ЭТОГО РОУТЕРА

router.post('/registration',)
router.post('/login',)
router.get('/auth', (req, res) => {
    res.json({message: 'ALL WORKING'})
})

module.exports = router