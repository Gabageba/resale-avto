const {Color} = require('../models/models')
const ApiError = require('../error/ApiError')


class ColorController {
  async create(req, res, next) {
    try {
      const {name} = req.body
      await Color.create({name})
      const colors = await Color.findAll()
      return res.json(colors)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const colors = await Color.findAll()
    return res.json(colors)
  }
}

module.exports = new ColorController()