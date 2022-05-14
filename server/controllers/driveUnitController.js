const {DriveUnit} = require('../models/models')
const ApiError = require('../error/ApiError')


class DriveUnitController {
  async create(req, res, next) {
    try {
      const {name} = req.body
      await DriveUnit.create({name})
      const driveUnits = await DriveUnit.findAll()
      return res.json(driveUnits)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const driveUnits = await DriveUnit.findAll()
    return res.json(driveUnits)
  }
}

module.exports = new DriveUnitController()