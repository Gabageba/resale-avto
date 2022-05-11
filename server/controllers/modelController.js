const {Model, ModelBrand} = require('../models/models')
const ApiError = require('../error/ApiError')

class ModelController {
  async create(req, res) {
    const {name, brandId} = req.body
    const model = await Model.create({name})
    const modelBrand = await ModelBrand.create({modelId: model.id, brandId})
    return res.json(model)
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