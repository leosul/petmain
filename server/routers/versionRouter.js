const { Router } = require('express')
const router = new Router()
const versionService = require('../services/versionService')

router.get('/', async(req, res) => {
    try {
        const version = await versionService.getVersion()

        if (version) res.send(version);
        else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router