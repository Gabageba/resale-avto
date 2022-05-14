const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')


class BrandController {
  async create(req, res, next) {
    try {
      const {name} = req.body
      await Brand.create({name})
      const brands = await Brand.findAll()
      return res.json(brands)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll()
    return res.json(brands)
  }
}

module.exports = new BrandController()