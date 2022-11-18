const { request } = require('express')
const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), requestController.create)
router.get('/', checkRole('ADMIN'), requestController.getAll)

module.exports = router