const { Router } = require('express')
const authenticator = require('./../middlewares/authenticator')
const walkerRouter = require('./walkerRouter')
const petRouter = require('./petRouter')
const breedRouter = require('./breedRouter')
const versionRouter = require('./versionRouter')
const versionRepository = require('../repositories/versionRepository')
const authRouter = require('./authRouter')
const router = new Router()

router.get('/', (_req, res) => {
    res.send('PetMain API - Version: ' + versionRepository.getVersion())
})

router.use('/walkers', authenticator, walkerRouter)
router.use('/pets', authenticator, petRouter)
router.use('/version', versionRouter)
router.use('/breeds', authenticator, breedRouter)
router.use('/auth', authRouter)


module.exports = router