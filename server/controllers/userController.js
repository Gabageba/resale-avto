const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Favorites, History} = require('../models/models')
const mailService = require('../service/mailService')
const uuid = require('uuid')
const path = require('path');

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role, name} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await User.findOne({where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }

    const activationLink = uuid.v4()
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`)


    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword, name, activationLink})
    const favorites = await Favorites.create({userId: user.id})
    const history = await History.create({userId: user.id})
    const token = generateJwt(user.id, user.email, user.role)
    const userInfo = {
      name: user.name,
      avatar: user.avatar,
      isActivate: user.isActivate
    }
    return res.json({token, userInfo})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    const userInfo = {
      name: user.name,
      avatar: user.avatar,
      isActivate: user.isActivate
    }
    return res.json({token, userInfo})
  }


  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    const user = await User.findOne({where: req.user.id})
    const userInfo = {
      name: user.name,
      avatar: user.avatar,
      isActivate: user.isActivate
    }
    return res.json({token, userInfo})
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link
      const user = await User.findOne({where: {activationLink}})
      if (!user) {
        return next(ApiError.badRequest('Некорректная ссылка активации'))
      }
      user.update({isActivate: true})
      return res.redirect(process.env.CLIENT_URL)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async update(req, res, next) {
    try {
      const {id, name, email} = req.body
      let changes
      if (!email && !name) {
        return next(ApiError.badRequest('Нечего менять :)'))
      }
      if (name) {
        changes = {name}
      }
      const user = await User.findOne({where: {id}})
      if (email) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
          return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const activationLink = uuid.v4()
        user.update({activationLink, isActivate: false})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`)
        changes = {...changes, email}
      }
      user.update(changes)
      const token = generateJwt(user.id, user.email, user.role)
      const userInfo = {
        name: user.name,
        avatar: user.avatar,
        isActivate: user.isActivate
      }
      return res.json({token, userInfo})
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }

  async updateImage(req, res, next) {
    try {
      const {id} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const user = await User.findOne({where: {id}})
      user.update({avatar: fileName})
      const token = generateJwt(user.id, user.email, user.role)
      const userInfo = {
        name: user.name,
        avatar: user.avatar,
        isActivate: user.isActivate
      }
      return res.json({token, userInfo})
    } catch (e) {
      return next(ApiError.badRequest('Не получилось обновить картинку'))
    }
  }

  async deleteImage(req, res, next) {
    try {
      const {id} = req.body
      const user = await User.findOne({where: {id}})
      user.update({avatar: null})
      const token = generateJwt(user.id, user.email, user.role)
      const userInfo = {
        name: user.name,
        avatar: user.avatar,
        isActivate: user.isActivate
      }
      return res.json({token, userInfo})
    } catch (e) {
      return next(ApiError.badRequest('Не получилось удалить картинку'))
    }
  }

}

module.exports = new UserController()