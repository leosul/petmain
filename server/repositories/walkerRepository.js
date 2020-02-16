const Walker = require('../models/Walker')

const findAll = (userId, page) => {
  const options = {
    page,
    limit: 20,
    sort: { title: 1 },
    customLabels: { docs: 'walkers' },
    select: { userId: 0, createdAt: 0, __v: 0 }
  }

  return Walker.paginate({ userId }, options)
}

const findById = (_id, userId) => {
  return Walker.findOne({ _id, userId })
    .select({ userId: 0, createdAt: 0, __v: 0 })
}

const insert = (walkerData) => {
  const walker = new Walker({ ...walkerData })
  return walker.save()
}

const update = async (id, walkerData) => {
  const walker = await findById(id, walkerData.userId)

  if (!walker) {
    throw new Error('not found')
  }

  Object.assign(walker, walkerData)
  return walker.save()
}

const remove = async (id, userId) => {
  const walker = await findById(id, userId)

  if (!walker) {
    throw new Error('not found')
  }

  return walker.remove()
}

const count = (userId) => {
  return Walker.countDocuments({ userId })
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
  count
}
