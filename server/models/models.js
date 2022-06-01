const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
  avatar: {type: DataTypes.STRING},
  isActivate: {type: DataTypes.BOOLEAN, defaultValue: false},
  activationLink: {type: DataTypes.STRING},
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
  description: {type: DataTypes.STRING, defaultValue: 'Нет описания'},
  img: {type: DataTypes.STRING, allowNull: false}
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
  phone_number: {type: DataTypes.STRING, allowNull: false},
  brand: {type: DataTypes.STRING, allowNull: false},
  model: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
})

const ApplicationType = sequelize.define('application_type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ModelBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Transmission = sequelize.define('transmission', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Image = sequelize.define('image', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  img: {type: DataTypes.STRING, allowNull: false}
})

const History = sequelize.define('history', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const HistoryCar = sequelize.define('history_car', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


User.hasOne(Favorites)
Favorites.belongsTo(User)

Favorites.hasMany(FavoritesCar)
FavoritesCar.belongsTo(Favorites)

Brand.hasMany(Car)
Car.belongsTo(Brand)

Transmission.hasMany(Car)
Car.belongsTo(Transmission)

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

ApplicationType.hasMany(Application)
Application.belongsTo(ApplicationType)

Model.belongsToMany(Brand, {through: ModelBrand })
Brand.belongsToMany(Model, {through: ModelBrand })

Car.hasMany(Image)
Image.belongsTo(Car)

User.hasOne(History)
History.belongsTo(User)

History.hasMany(HistoryCar)
HistoryCar.belongsTo(History)

Car.hasMany(HistoryCar)
HistoryCar.belongsTo(Car)


module.exports = {
  User,
  Application,
  ApplicationType,
  Favorites,
  FavoritesCar,
  History,
  HistoryCar,
  Image,
  Car,
  BodyType,
  DriveUnit,
  Color,
  Brand,
  Model,
  SteeringWheel,
  ModelBrand,
  Transmission
}
