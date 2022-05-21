const {SteeringWheel} = require('../models/models')
const ApiError = require('../error/ApiError')


class SteeringWheelController {
  async create(req, res, next) {
    try {
      const {name} = req.body
      await SteeringWheel.create({name})
      const steeringWheels = await SteeringWheel.findAll()
      return res.json(steeringWheels)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const steeringWheels = await SteeringWheel.findAll()
    return res.json(steeringWheels)
  }

}

module.exports = new SteeringWheelController()