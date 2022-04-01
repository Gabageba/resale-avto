const {BodyType} = require('../models/models')
const ApiError = require('../error/ApiError')


class BodyTypeController {
  async create(req, res) {
    const {name} = req.body
    const bodyType = await BodyType.create({name})
    return res.json(bodyType)
  }

  async getAll(req, res) {
    const bodyType = await BodyType.findAll()
    return res.json(bodyType)
  }
}

module.exports = new BodyTypeController()