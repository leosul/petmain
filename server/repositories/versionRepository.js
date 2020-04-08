const pjson = require('../../package.json')

const getVersion = () => {
    return pjson.version
}

module.exports = {
    getVersion
}