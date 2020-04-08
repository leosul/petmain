const { Router } = require('express')
const router = new Router()
const versionService = require('../services/versionService')

router.get('/', async(req, res) => {
    const version = await versionService.getVersion()
    res.send(version)
})

module.exports = router