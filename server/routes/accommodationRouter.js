const Router = require('express')
const router = new Router()
const accommodationController = require('../controllers/accommodationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', accommodationController.create)
router.get('/', accommodationController.getAll)
router.get('/:id', accommodationController.getOne)
router.patch('/', accommodationController.update) //checkRole('ADMIN')

module.exports = router