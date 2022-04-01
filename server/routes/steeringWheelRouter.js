const Router = require('express')
const router = new Router
const steeringWheelController = require('../controllers/steeringWheelController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), steeringWheelController.create)
router.get('/', steeringWheelController.getAll)

module.exports = router