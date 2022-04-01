const uuid = require('uuid')
const path = require('path')
const {static} = require("express");
const {Car} = require('../models/models')
const ApiError = require('../error/ApiError')

class CarController {
  async create(req, res, next) {
    try {
      const {
        price,
        brandId,
        modelId,
        bodyTypeId,
        year,
        millage,
        power,
        driveUnitId,
        steeringWheelId,
        colorId,
        owners,
        description
      } = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const car = await Car.create({
        price,
        brandId,
        modelId,
        bodyTypeId,
        year,
        millage,
        power,
        driveUnitId,
        steeringWheelId,
        colorId,
        owners,
        description,
        img: fileName
      })

      return res.json(car)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, modelId, limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let cars

    if (!brandId && !modelId) {
      cars = await Car.findAndCountAll({limit, offset})
    }
    if (brandId && !modelId) {
      cars = await Car.findAndCountAll({where:{brandId}, limit, offset})
    }
    if (!brandId && modelId) {
      cars = await Car.findAndCountAll({where:{modelId}, limit, offset})
    }
    if (brandId && modelId) {
      cars = await Car.findAndCountAll({where:{modelId, brandId}, limit, offset})
    }
    return res.json(cars)
  }

  async getOne(req, res) {
    const {id} = req.params
    const car = await Car.findOne(
      {
        where: {id}
      }
    )
    return res.json(car)
  }
}

module.exports = new CarController()