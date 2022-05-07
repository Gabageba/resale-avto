const ApiError = require('../error/ApiError')
const {Transmission} = require('../models/models');


class TransmissionController {
  async create(req, res) {
    const {name} = req.body
    const transmission = await Transmission.create({name})
    return res.json(transmission)
  }

  async getAll(req, res) {
    const transmission = await Transmission.findAll()
    return res.json(transmission)
  }
}

module.exports = new TransmissionController()