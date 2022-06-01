const {BodyType, ApplicationType, Application, Favorites, FavoritesCar} = require('../models/models')
const ApiError = require('../error/ApiError')


class ApplicationController {
  async createApplicationType(req, res, next) {
    try {
      const {name} = req.body
      await ApplicationType.create({name})
      const applicationsType = await ApplicationType.findAll()
      return res.json(applicationsType)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAllType(req, res) {
    const applicationsType = await ApplicationType.findAll()
    return res.json(applicationsType)
  }

  async createApplication(req, res, next) {
    try {
      let {year, millage, phoneNumber, brand, model, price, type} = req.body

      const application = await Application.create({year, millage, phone_number: phoneNumber, brand, price, model, applicationTypeId: type})
      return res.json(application)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAllApplications(req, res, next) {
    try {
      let {type, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      let filter = {}
      if (type) {
        filter = {applicationTypeId: type}
      }

      const applicationsType = await Application.findAndCountAll({where: filter, limit, offset})
      return res.json(applicationsType)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async deleteApplication(req, res, next) {
    try {
      let {id, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      await Application.destroy({where: {id}})
      const applicationsType = await Application.findAndCountAll({limit, offset})
      return res.json(applicationsType)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}


module.exports = new ApplicationController()