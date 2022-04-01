const Router = require('express')
const router = new Router
const driveUnitController = require('../controllers/driveUnitController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole,driveUnitController.create)
router.get('/', driveUnitController.getAll)

module.exports = router