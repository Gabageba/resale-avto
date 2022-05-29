const ApiError = require('../error/ApiError')
const {Favorites, FavoritesCar, Model, Car} = require('../models/models');


class favouriteController {
  async create(req, res, next) {
    try {
      const {carId, userId} = req.body
      const favoritesId = await Favorites.findOne({where: {userId}})
      if (!favoritesId) {
        return next(ApiError.badRequest('Не удалось найти корзину'))
      }
      const check = await FavoritesCar.findOne({where: {favoriteId: favoritesId.id, carId}})
      if (check) {
        return next(ApiError.badRequest('Это авто уже в избранном'))
      }
      await FavoritesCar.create({favoriteId: favoritesId.id, carId})
      const favoriteCar = await FavoritesCar.findOne({where: {favoriteId: favoritesId.id, carId}})
      return res.json(favoriteCar)
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

      const favoritesId = await Favorites.findOne({where: {userId}})
      const favoritesCar = await FavoritesCar.findAndCountAll({ order: [["createdAt", "DESC"]], where: {favoriteId: favoritesId.id}, limit, offset})
      const count = favoritesCar.count
      for (let i = 0; i < favoritesCar.rows.length; i++) {
        const f = await Car.findOne({where: {id: favoritesCar.rows[i].carId}})
        rows = [...rows, f]
      }
      return res.json({count, rows})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getOne(req, res, next) {
    try {
      const {userId, carId} = req.query
      const favoritesId = await Favorites.findOne({where: {userId}})
      const favoriteCar = await FavoritesCar.findOne({where: {favoriteId: favoritesId.id, carId}})
      return res.json(favoriteCar)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async delete(req, res, next) {
    try {
      const {userId, carId} = req.query
      const favoritesId = await Favorites.findOne({where: {userId}})
      await FavoritesCar.destroy({where: {favoriteId: favoritesId.id, carId}})
      const favoriteCar = await FavoritesCar.findOne({where: {favoriteId: favoritesId.id, carId}})
      return res.json(favoriteCar)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new favouriteController()