const ApiError = require('../error/ApiError')
const {Car, History, HistoryCar} = require('../models/models');


class historyController {
  async create(req, res, next) {
    try {
      const {carId, userId} = req.body
      const historyId = await History.findOne({where: {userId}})
      if (!historyId) {
        return next(ApiError.badRequest('Не удалось найти историю'))
      }
      const check = await HistoryCar.findOne({where: {historyId: historyId.id, carId}})
      if (check) {
        await HistoryCar.destroy({where: {historyId: historyId.id, carId}})
      }
      const historyCar = await HistoryCar.create({historyId: historyId.id, carId})
      return res.json(historyCar)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res, next) {
    try {
      let {userId, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      let rows = []

      const historyId = await History.findOne({where: {userId}})
      const historyCar = await HistoryCar.findAndCountAll({ order: [["createdAt", "DESC"]], where: {historyId: historyId.id}, limit, offset})
      const count = historyCar.count
      for (let i = 0; i < historyCar.rows.length; i++) {
        const f = await Car.findOne({where: {id: historyCar.rows[i].carId}})
        rows = [...rows, f]
      }
      return res.json({count, rows})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async delete(req, res, next) {
    try {
      let {userId, carId, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      let rows = []

      const historyId = await History.findOne({where: {userId}})
      await HistoryCar.destroy({where: {historyId: historyId.id, carId}})
      const historyCar = await HistoryCar.findAndCountAll({ order: [["createdAt", "DESC"]], where: {historyId: historyId.id}, limit, offset})
      const count = historyCar.count
      for (let i = 0; i < historyCar.rows.length; i++) {
        const f = await Car.findOne({where: {id: historyCar.rows[i].carId}})
        rows = [...rows, f]
      }
      return res.json({count, rows})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async deleteAll(req, res, next) {
    try {
      let {userId} = req.query
      const historyId = await History.findOne({where: {userId}})
      await HistoryCar.destroy({where: {historyId: historyId.id}})
      const historyCar = await HistoryCar.findAndCountAll()
      return res.json(historyCar)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new historyController()