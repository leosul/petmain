const { Router } = require('express')
const authenticator = require('../middlewares/authenticator')
const walkerRouter = require('./walkerRouter')
const petRouter = require('./petRouter')
const authRouter = require('./authRouter')
const router = new Router()

router.get('/', (_req, res) => {
  res.send('petmain api')
})

router.use('/walkers', authenticator, walkerRouter)
router.use('/pets', authenticator, petRouter)
router.use('/auth', authRouter)

module.exports = router
