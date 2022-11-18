const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const studentRouter = require('./studentRouter')
const requestRouter = require('./requestRouter')
const accommodationRouter = require('./accommodationRouter')

router.use('/user', userRouter)
router.use('/student', studentRouter)
router.use('/request', requestRouter)
router.use('/accommodation', accommodationRouter)

module.exports = router