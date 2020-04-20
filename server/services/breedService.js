const breedRepository = require('../repositories/breedRepository')

const findAll = (page) => {
    return breedRepository.findAll(page)
}

const findById = (id) => {
    return breedRepository.findById(id)
}

const insert = async(breedData) => {
    const breed = await breedRepository.insert(breedData)

    return findById(breed._id)
}

const update = async(id, breedData) => {
    const breed = await breedRepository.update(id, breedData)
    return findById(breed._id)
}

const remove = (id) => {
    return breedRepository.remove(id)
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}