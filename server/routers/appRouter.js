const { Router } = require('express')
const walkerRouter = require('./walkerRouter')
const petRouter = require('./petRouter')
const breedRouter = require('./breedRouter')
const versionRouter = require('./versionRouter')
const versionRepository = require('../repositories/versionRepository')
const router = new Router()

router.get('/', (_req, res) => {
    res.send('PetMain API - Version: ' + versionRepository.getVersion())
})

router.use('/walkers', walkerRouter)
router.use('/pets', petRouter)
router.use('/version', versionRouter)
router.use('/breeds', breedRouter)


module.exports = router