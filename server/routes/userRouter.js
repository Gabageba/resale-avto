const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', auth, userController.check)
router.get('/activate/:link', userController.activate)
router.put('/', userController.update)

module.exports = router