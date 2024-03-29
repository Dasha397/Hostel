const Router = require('express')
const router = new Router()
const statusController = require('../controllers/statusController')

router.post('/', statusController.create)
router.get('/', statusController.getAll)
router.get('/:id', statusController.getOne)

module.exports = router