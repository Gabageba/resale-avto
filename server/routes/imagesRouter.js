const Router = require('express')
const router = new Router
const checkRole = require('../middleware/checkRoleMiddleware')
const imagesController = require('../controllers/imagesController')

router.post('/', checkRole('ADMIN'), imagesController.create)
router.get('/', imagesController.getAll)

module.exports = router