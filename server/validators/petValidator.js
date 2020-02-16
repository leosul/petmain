const beforeInsert = async (pet) => {
  if (!pet) {
    return error('pet cannot be null')
  }

  if (!pet.userId) {
    return error('userId cannot be null')
  }

  if (!pet.name) {
    return error('name cannot be null')
  } else if (pet.name.length > 100) {
    return error('name max length is 100')
  }

  if (!pet.breed) {
    return error('breed cannot be null')
  } else if (pet.breed.length > 100) {
    return error('breed max length is 100')
  }

  if (!pet.size) {
    return error('size cannot be null')
  } else if (pet.size.length > 100) {
    return error('size max length is 100')
  }

  if (!pet.weight) {
    return error('weight cannot be null')
  } else if (pet.weight.length > 100) {
    return error('weight max length is 100')
  }

  return success()
}

const error = (message) => {
  return { isValid: false, message }
}

const success = () => {
  return { isValid: true }
}

module.exports = {
  beforeInsert
}
