const Router = require('express')
const router = new Router
const bodyTypeController = require('../controllers/bodyTypeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),bodyTypeController.create)
router.get('/', bodyTypeController.getAll)

module.exports = router