const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', auth, userController.check)
router.get('/activate/:link', userController.activate)
router.put('/updateInfo', userController.update)
router.put('/updateImg', userController.updateImage)
router.put('/deleteImg', userController.deleteImage)

module.exports = router