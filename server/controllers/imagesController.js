const uuid = require('uuid')
const path = require('path')
const {Image} = require('../models/models')
const ApiError = require('../error/ApiError')

class ImagesController {
  async create(req, res, next) {
    try {
      const {carId} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      await Image.create({carId, img: fileName})
      const image = await Image.findAll({where: {carId}})
      return res.json(image)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {carId} = req.query
    const images = await Image.findAll({where: {carId}})
    return res.json(images)
  }

}

module.exports = new ImagesController()