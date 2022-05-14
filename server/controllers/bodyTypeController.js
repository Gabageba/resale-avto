const {BodyType} = require('../models/models')
const ApiError = require('../error/ApiError')


class BodyTypeController {
  async create(req, res, next) {
    try {
      const {name} = req.body
      await BodyType.create({name})
      const bodyTypes = await BodyType.findAll()
      return res.json(bodyTypes)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const bodyTypes = await BodyType.findAll()
    return res.json(bodyTypes)
  }
}

module.exports = new BodyTypeController()