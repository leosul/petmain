const { Router } = require("express");
const router = new Router();
const breedService = require("../services/breedService");

router.get("/", async(req, res) => {
    const { query } = req;

    try {
        const breeds = await breedService.findAll();

        if (breeds)
            res.send(breeds);
        else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:id", async(req, res) => {
    const {
        params: { id },
    } = req;

    try {
        const breed = await breedService.findById(id);

        if (breed) {
            res.json(breed);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async(req, res) => {
    const { body } = req;

    try {
        const breed = await breedService.insert(body);
        res.status(201).json(breed);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async(req, res) => {
    const {
        body,
        params: { id },
    } = req;

    try {
        const breed = await breedService.update(id, body);
        res.status(200).json(breed);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async(req, res) => {
    const {
        params: { id },
    } = req;

    try {
        await breedService.remove(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;