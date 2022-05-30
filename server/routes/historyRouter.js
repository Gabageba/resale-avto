const Router = require('express')
const router = new Router
const historyController = require('../controllers/historyController')

router.post('/',historyController.create)
router.get('/', historyController.getAll)
router.delete('/', historyController.delete)
router.delete('/deleteAll', historyController.deleteAll)

module.exports = router