const {Model} = require('../models/models')
const ApiError = require('../error/ApiError')

class ModelController {
  async create(req, res) {
    const {name} = req.body
    const model = await Model.create({name})
    return res.json(model)
  }

  async getAll(req, res) {
    const models = await Model.findAll()
    return res.json(models)
  }
}

module.exports = new ModelController()