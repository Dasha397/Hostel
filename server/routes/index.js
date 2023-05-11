const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const studentRouter = require('./studentRouter')
const requestRouter = require('./requestRouter')
const accommodationRouter = require('./accommodationRouter')
const statusRouter = require('./statusRouter')
const benefitRouter = require('./benefitRouter')
const penaltyRouter = require('./penaltyRouter')
const typeOfBenefitRouter = require('./typeOfBenefitRouter')
const typeOfPenaltyRouter = require('./typeOfPenaltyRouter')

router.use('/user', userRouter)
router.use('/student', studentRouter)
router.use('/request', requestRouter)
router.use('/accommodation', accommodationRouter)
router.use('/status', statusRouter)
router.use('/benefit', benefitRouter)
router.use('/penalty', penaltyRouter)
router.use('/benefit/type', typeOfBenefitRouter)
router.use('/penalty/type', typeOfPenaltyRouter)

module.exports = router