const ApiError = require('../error/ApiError')
const {Transmission} = require('../models/models');


class TransmissionController {
  async create(req, res, next) {
    try {
      const {name} = req.body
      await Transmission.create({name})
      const transmissions = await Transmission.findAll()
      return res.json(transmissions)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const transmissions = await Transmission.findAll()
    return res.json(transmissions)
  }
}

module.exports = new TransmissionController()