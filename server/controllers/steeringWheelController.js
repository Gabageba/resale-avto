const {SteeringWheel} = require('../models/models')
const ApiError = require('../error/ApiError')


class SteeringWheelController {
  async create(req, res) {
    const {name} = req.body
    const steeringWheel = await SteeringWheel.create({name})
    return res.json(steeringWheel)
  }

  async getAll(req, res) {
    const bodyType = await SteeringWheel.findAll()
    return res.json(bodyType)
  }
}

module.exports = new SteeringWheelController()