const { Router } = require("express");
const router = new Router();
const petService = require("../services/petService");

router.get("/", async(req, res) => {
    const { userId, query } = req;

    try {
        const pets = await petService.findAll(userId, query.page);

        if (pets) res.json(pets);
        else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:id", async(req, res) => {
    const { params: { id }, userId } = req

    try {
        const pet = await petService.findById(id, userId);

        if (pet) {
            res.json(pet);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async(req, res) => {
    const { body, userId } = req
    body.userId = userId

    try {
        const pet = await petService.insert(body);
        res.status(201).json(pet);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async(req, res) => {
    const { body, params: { id }, userId } = req
    body.userId = userId

    try {
        const pet = await petService.update(id, body);
        res.status(200).json(pet);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async(req, res) => {
    const { params: { id }, userId } = req

    try {
        await petService.remove(id, userId);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;