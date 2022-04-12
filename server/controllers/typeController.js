const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');


class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()//ВЕРНЕТ ВСЕ УЩЕСТВУЮЩИЕ ЗАПИСИ В БД
        return res.json(types)
    }
}

module.exports = new TypeController()//НА ВЫХОДЕ ИЗ ЭТОГО ФАЙЛА ПОЛУЧИТСЯ НОВЫЙ ОБЬЕКТ