const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', studentController.create) //checkRole('USER')
router.get('/', studentController.getAll) //checkRole('ADMIN')
router.get('/:id', studentController.getOne)
router.patch('/:id', studentController.update)

module.exports = router