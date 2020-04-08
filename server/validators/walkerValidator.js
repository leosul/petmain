const beforeInsert = async(walker) => {
    if (!walker) {
        return error('walker cannot be null')
    }

    if (!walker.title) {
        return error('title cannot be null')
    } else if (walker.title.length > 100) {
        return error('title max length is 100')
    }

    if (!walker.country) {
        return error('country cannot be null')
    } else if (walker.country.length > 100) {
        return error('country max length is 100')
    }

    if (!walker.text) {
        return error('text cannot be null')
    } else if (walker.text.length > 300) {
        return error('text max length is 300')
    }

    if (!walker.price === 0) {
        return error('price cannot be 0')
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