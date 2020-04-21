const { Router } = require('express')
const router = new Router()
const walkerService = require('../services/walkerService')

router.get('/', async(req, res) => {
    const { query } = req

    try {
        const walkes = await walkerService.findAll(query.page)

        if (walkes) res.json(walkes);
        else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/:id', async(req, res) => {
    const { params: { id } } = req

    try {
        const walker = await walkerService.findById(id)

        if (walker) {
            res.json(walker)
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/', async(req, res) => {
    const { body } = req

    try {
        const walker = await walkerService.insert(body)
        res.status(201).json(walker)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.put('/:id', async(req, res) => {
    const { body, params: { id } } = req

    try {
        const walker = await walkerService.update(id, body)
        res.status(200).json(walker)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    const { params: { id } } = req

    try {
        await walkerService.remove(id)
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router