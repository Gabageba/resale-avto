const ApiError = require('../error/ApiError')
const {Favorites, FavoritesCar} = require('../models/models');


class favouriteController {
  async create(req, res, next) {
    try {
      const {carId, userId} = req.body
      const favoritesId = await Favorites.findAll({where: {userId}})
      await FavoritesCar.create({favoriteId: favoritesId[0].id, carId})
      const favoritesCar = await FavoritesCar.findAll({where: {favoriteId: favoritesId[0].id}})
      return res.json(favoritesCar)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res, next) {
    try {
      const {userId} = req.query
      const favoritesId = await Favorites.findAll({where: {userId}})
      const favoritesCar = await FavoritesCar.findAll({where: {favoriteId: favoritesId[0].id}})
      return res.json(favoritesCar)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new favouriteController()