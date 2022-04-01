const Router = require('express')
const router = new Router
const carRouter = require('./carRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const modelRouter = require('./modelRouter')
const bodyTypeRouter = require('./bodyTypeRouter')
const colorRouter = require('./colorRouter')
const driveUnitRouter = require('./driveUnitRouter')
const steeringWheelRouter = require('./steeringWheelRouter')

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/model', modelRouter)
router.use('/car', carRouter)
router.use('/bodyType', bodyTypeRouter)
router.use('/color', colorRouter)
router.use('/driveUnit', driveUnitRouter)
router.use('/steeringWheel', steeringWheelRouter)

module.exports = router