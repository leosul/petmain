const walkerRepository = require('./../repositories/walkerRepository')
const { beforeInsert } = require('./../validators/walkerValidator')

const findAll = (userId, page) => {
  return walkerRepository.findAll(userId, page)
}

const findById = (id, userId) => {
  return walkerRepository.findById(id, userId)
}

const insert = async (walerData) => {
  const { isValid, message } = await beforeInsert(walerData)

  if (!isValid) {
    throw new Error(message)
  }

  const walker = await walkerRepository.insert(walerData)
  return findById(walker._id, walker.userId)
}

const update = async (id, walerData) => {
  const walker = await walkerRepository.update(id, walerData)
  return findById(walker._id, walker.userId)
}

const remove = (id, userId) => {
  return walkerRepository.remove(id, userId)
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
