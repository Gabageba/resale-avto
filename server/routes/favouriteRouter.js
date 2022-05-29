const Router = require('express')
const router = new Router
const favouriteController = require('../controllers/favouriteController')

router.post('/',favouriteController.create)
router.get('/', favouriteController.getAll)
router.get('/check', favouriteController.getOne)
router.delete('/', favouriteController.delete)

module.exports = router