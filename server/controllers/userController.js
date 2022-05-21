const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Favorites, History} = require('../models/models')

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
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({  email, role, password: hashPassword, name})
    const favorites = await Favorites.create({userId: user.id})
    const history = await History.create({userId: user.id})
    const token = generateJwt(user.id, user.email, user.role)
    const userInfo = {
      name: user.name,
      avatar: user.avatar
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
      avatar: user.avatar
    }
    return res.json({token, userInfo})
  }


  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    const user = await User.findOne({where: req.user.id})
    const userInfo = {
      name: user.name,
      avatar: user.avatar
    }
    return res.json({token, userInfo})
  }
}

module.exports = new UserController()