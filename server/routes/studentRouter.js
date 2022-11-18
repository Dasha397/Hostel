const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), studentController.create)
router.get('/', checkRole('ADMIN'), studentController.getAll)
router.get('/:id', studentController.getOne)
router.patch('/:id', studentController.update)

module.exports = router