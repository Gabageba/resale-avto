const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true,},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const UserInfo = sequelize.define('user_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false}
})

const Favorites = sequelize.define('favorites', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const FavoritesCar = sequelize.define('favorites_car', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Car = sequelize.define('car', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  price: {type: DataTypes.INTEGER, allowNull: false},
  year: {type: DataTypes.INTEGER, allowNull: false},
  millage: {type: DataTypes.INTEGER, allowNull: false},
  power: {type: DataTypes.INTEGER, allowNull: false},
  owners: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, defaultValue: 'Нет описания'}
})

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Model = sequelize.define('model', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Color = sequelize.define('color', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const DriveUnit = sequelize.define('drive_unit', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const BodyType = sequelize.define('body_type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const SteeringWheel = sequelize.define('steering_wheel', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Application = sequelize.define('application', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  year: {type: DataTypes.INTEGER, allowNull: false},
  millage: {type: DataTypes.INTEGER, allowNull: false},
  phone_number: {type: DataTypes.STRING, allowNull: false}
})

const ApplicationType = sequelize.define('application_type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ModelBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Favorites)
Favorites.belongsTo(User)

User.hasMany(UserInfo)
UserInfo.belongsTo(User)

Favorites.hasMany(FavoritesCar)
FavoritesCar.belongsTo(Favorites)

Brand.hasMany(Car)
Car.belongsTo(Brand)

Model.hasMany(Car)
Car.belongsTo(Model)

SteeringWheel.hasMany(Car)
Car.belongsTo(SteeringWheel)

Color.hasMany(Car)
Car.belongsTo(Color)

DriveUnit.hasMany(Car)
Car.belongsTo(DriveUnit)

BodyType.hasMany(Car)
Car.belongsTo(BodyType)

Car.hasMany(FavoritesCar)
FavoritesCar.belongsTo(Car)

Application.hasMany(User)
User.belongsTo(Application)

Application.hasMany(Brand)
Brand.belongsTo(Application)

Application.hasMany(Model)
Model.belongsTo(Application)

ApplicationType.hasMany(Application)
Application.belongsTo(ApplicationType)

Model.belongsToMany(Brand, {through: ModelBrand })
Brand.belongsToMany(Model, {through: ModelBrand })

module.exports = {
  User,
  UserInfo,
  Application,
  ApplicationType,
  Favorites,
  FavoritesCar,
  Car,
  BodyType,
  DriveUnit,
  Color,
  Brand,
  Model,
  SteeringWheel
}