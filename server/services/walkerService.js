const walkerRepository = require('./../repositories/walkerRepository')
const { beforeInsert } = require('./../validators/walkerValidator')

const findAll = (page) => {
    return walkerRepository.findAll(page)
}

const findById = (id) => {
    return walkerRepository.findById(id)
}

const insert = async(walerData) => {
    const { isValid, message } = await beforeInsert(walerData)

    if (!isValid) {
        throw new Error(message)
    }

    const walker = await walkerRepository.insert(walerData)
    return findById(walker._id)
}

const update = async(id, walerData) => {
    const walker = await walkerRepository.update(id, walerData)
    return findById(walker._id)
}

const remove = (id) => {
    return walkerRepository.remove(id)
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}