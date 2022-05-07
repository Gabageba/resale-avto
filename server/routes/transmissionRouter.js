const Router = require('express')
const router = new Router
const transmissionController = require('../controllers/transmissionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),transmissionController.create)
router.get('/', transmissionController.getAll)

module.exports = router