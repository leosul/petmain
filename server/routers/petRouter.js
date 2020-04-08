const { Router } = require('express')
const router = new Router()
const petService = require('../services/petService')

router.get('/', async(req, res) => {
    const { query } = req
    const pets = await petService.findAll(query.page)
    res.json(pets)
})

router.get('/:id', async(req, res) => {
    const { params: { id } } = req

    try {
        const pet = await petService.findById(i)

        if (pet) {
            res.json(pet)
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
        const pet = await petService.insert(body)
        res.status(201).json(pet)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.put('/:id', async(req, res) => {
    const { body, params: { id } } = req

    try {
        const pet = await petService.update(id, body)
        res.status(200).json(pet)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    const { params: { id } } = req

    try {
        await petService.remove(id)
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router