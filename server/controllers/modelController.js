const {Model, ModelBrand} = require('../models/models')
const ApiError = require('../error/ApiError')

class ModelController {
  async create(req, res, next) {
    try {
      const {name, brandId} = req.body
      const model = await Model.create({name})
      await ModelBrand.create({modelId: model.id, brandId})
      const models = await Model.findAll()
      return res.json(models)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const {brandId} = req.query
    console.log(brandId)
    let models =[]
    if (!brandId) {
      models = await Model.findAll()
    }
    if (brandId) {
      const modelBrand = await ModelBrand.findAll({where: {brandId}})
      for (let i = 0; i < modelBrand.length; i++) {
        const m = await Model.findAll({where: {id: modelBrand[i].modelId}})
        models = [...models, m[0]]
      }

    }
    return res.json(models)
  }

}

module.exports = new ModelController()