const petRepository = require('./../repositories/petRepository')
const { beforeInsert } = require('./../validators/petValidator')

const findAll = (userId, page) => {
  return petRepository.findAll(userId, page)
}

const findById = (id, userId) => {
  return petRepository.findById(id, userId)
}

const insert = async (petData) => {
  const { isValid, message } = await beforeInsert(petData)

  if (!isValid) {
    throw new Error(message)
  }

  const pet = await petRepository.insert(petData)
  return findById(pet._id, pet.userId)
}

const update = async (id, petData) => {
  const pet = await petRepository.update(id, petData)
  return findById(pet._id, pet.userId)
}

const remove = (id, userId) => {
  return petRepository.remove(id, userId)
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
