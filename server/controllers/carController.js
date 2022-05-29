const uuid = require('uuid')
const path = require('path')
const {Car, Image, FavoritesCar} = require('../models/models')
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
        description,
        transmissionId
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
        transmissionId,
        img: fileName
      })
      return res.json(car)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, modelId, bodyTypeId, driveUnitId, transmissionId, steeringWheelId, limit, page} = req.query
    let findFilter

    if (brandId) {
      findFilter = {...findFilter, brandId}
    }
    if (modelId) {
      findFilter = {...findFilter, modelId}
    }
    if (bodyTypeId) {
      findFilter = {...findFilter, bodyTypeId}
    }
    if (driveUnitId) {
      findFilter = {...findFilter, driveUnitId}
    }
    if (transmissionId) {
      findFilter = {...findFilter, transmissionId}
    }
    if (steeringWheelId) {
      findFilter = {...findFilter, steeringWheelId}
    }

    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit


    let cars
    if (findFilter === {}) {
      cars = await Car.findAndCountAll({limit, offset})
    } else {
      cars = await Car.findAndCountAll({where: findFilter, limit, offset})
    }

    return res.json(cars)
  }

  async getOne(req, res) {
    const {id} = req.params
    const car = await Car.findOne({where: {id}})
    return res.json(car)
  }

  async delete(req, res) {
    let {id, limit, page} = req.query

    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit


    await Image.destroy({where: {carId: id}})
    await FavoritesCar.destroy({where: {carId: id}})
    await Car.destroy({where: {id}})

    const cars = await Car.findAndCountAll({limit, offset})
    return res.json(cars)
  }
}

module.exports = new CarController()