const { request } = require('express')
const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', requestController.create) //checkRole('USER')
router.get('/', requestController.getAll) //checkRole('ADMIN')

module.exports = router