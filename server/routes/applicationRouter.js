const Router = require('express')
const router = new Router
const checkRole = require('../middleware/checkRoleMiddleware')
const applicationController = require('../controllers/applicationController')

router.post('/type', checkRole('ADMIN'), applicationController.createApplicationType)
router.get('/type',checkRole('ADMIN') ,applicationController.getAllType)
router.post('/', applicationController.createApplication)
router.get('/',checkRole('ADMIN'), applicationController.getAllApplications)
router.delete('/',checkRole('ADMIN'), applicationController.deleteApplication)

module.exports = router