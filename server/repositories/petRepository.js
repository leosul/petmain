const Pet = require('../models/Pet')

const findAll = (userId = '5e8c6f363b533d553792b889', page) => {
    const options = {
        page,
        limit: 20,
        sort: { name: 1 },
        customLabels: { docs: 'pets' },
        select: { userId: 0, createdAt: 0, __v: 0 }
    }

    return Pet.paginate({ userId }, options)
}

const findById = (_id, userId) => {
    return Pet.findOne({ _id, userId })
        .select({ userId: 0, createdAt: 0, __v: 0 })
}

const insert = (petData) => {
    const pet = new Pet({...petData })
    return pet.save()
}

const update = async(id, petData) => {
    const pet = await findById(id, petData.userId)

    if (!pet) {
        throw new Error('not found')
    }

    Object.assign(pet, petData)
    return pet.save()
}

const remove = async(id, userId) => {
    const pet = await findById(id, userId)

    if (!pet) {
        throw new Error('not found')
    }

    return pet.remove()
}

const count = (userId) => {
    return Pet.countDocuments({ userId })
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove,
    count
}