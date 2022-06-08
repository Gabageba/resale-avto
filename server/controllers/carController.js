const uuid = require('uuid')
const path = require('path')
const {Car, Image, FavoritesCar, HistoryCar, Brand, History} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Op} = require('sequelize');

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
    let {
      brandId,
      modelId,
      bodyTypeId,
      driveUnitId,
      transmissionId,
      steeringWheelId,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      minMillage,
      maxMillage,
      limit,
      page,
      sortName
    } = req.query

    let findFilter

    let carSort = [['createdAt', 'DESC']]
    if (sortName === 'PriceDown') {
      carSort = [['price', 'DESC']]
    }
    if (sortName === 'PriceUp') {
      carSort = [['price', 'ASC']]
    }
    if (sortName === 'TimeDown') {
      carSort = [['createdAt', 'DESC']]
    }
    if (sortName === 'TimeUp') {
      carSort = [['createdAt', 'ASC']]
    }
    if (sortName === 'YearDown') {
      carSort = [['year', 'DESC']]
    }
    if (sortName === 'YearUp') {
      carSort = [['year', 'ASC']]
    }

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

    if (minPrice && maxPrice) {
      findFilter = {
        ...findFilter, price: {[Op.between]: [minPrice, maxPrice]}
      }
    } else if (!minPrice && maxPrice) {
      findFilter = {
        ...findFilter, price: {[Op.lte]: maxPrice}
      }
    } else if (minPrice && !maxPrice) {
      findFilter = {
        ...findFilter, price: {[Op.gte]: minPrice}
      }
    }

    if (minYear && maxYear) {
      findFilter = {
        ...findFilter, year: {[Op.between]: [minYear, maxYear]}
      }
    } else if (!minYear && maxYear) {
      findFilter = {
        ...findFilter, year: {[Op.lte]: maxYear}
      }
    } else if (minYear && !maxYear) {
      findFilter = {
        ...findFilter, year: {[Op.gte]: minYear}
      }
    }

    if (minMillage && maxMillage) {
      findFilter = {
        ...findFilter, millage: {[Op.between]: [minMillage, maxMillage]}
      }
    } else if (!minMillage && maxMillage) {
      findFilter = {
        ...findFilter, millage: {[Op.lte]: maxMillage}
      }
    } else if (minMillage && !maxMillage) {
      findFilter = {
        ...findFilter, millage: {[Op.gte]: minMillage}
      }
    }

    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit


    let cars
    if (findFilter === {}) {
      cars = await Car.findAndCountAll({order: carSort, limit, offset})
    } else {
      cars = await Car.findAndCountAll({order: carSort, where: findFilter, limit, offset})
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
    await HistoryCar.destroy({where: {carId: id}})
    await Car.destroy({where: {id}})

    const cars = await Car.findAndCountAll({order: [['createdAt', 'DESC']], limit, offset})
    return res.json(cars)
  }

  async getRecommendation(req, res, next) {
    try {
      const page =  1
      const limit =  3
      let offset = page * limit - limit

      const randOne = Math.floor(Math.random() * (25 - 1)) + 1;
      const randTwo = Math.floor(Math.random() * (24 - 1)) + 1;
      const randThree = Math.floor(Math.random() * (11 - 1)) + 1;

      const cars = await Car.findAll({order: [['createdAt', 'DESC']], where:{ [Op.or]: [{ brandId: randOne }, { modelId: randTwo }, {bodyTypeId: randThree}]}, limit, offset})
      return res.json(cars)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new CarController()