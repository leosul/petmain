const petRepository = require('./../repositories/petRepository')
const { beforeInsert } = require('./../validators/petValidator')

const findAll = (page) => {
    return petRepository.findAll(page)
}

const findById = (id) => {
    return petRepository.findById(id)
}

const insert = async(petData) => {
    const { isValid, message } = await beforeInsert(petData)

    if (!isValid) {
        throw new Error(message)
    }

    const pet = await petRepository.insert(petData)
    return findById(pet._id)
}

const update = async(id, petData) => {
    const pet = await petRepository.update(id, petData)
    return findById(pet._id)
}

const remove = (id) => {
    return petRepository.remove(id)
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}