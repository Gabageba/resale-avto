const {DriveUnit} = require('../models/models')
const ApiError = require('../error/ApiError')


class DriveUnitController {
  async create(req, res) {
    const {name} = req.body
    const driveUnit = await DriveUnit.create({name})
    return res.json(driveUnit)
  }

  async getAll(req, res) {
    const bodyType = await DriveUnit.findAll()
    return res.json(bodyType)
  }
}

module.exports = new DriveUnitController()