const versionRepository = require('./../repositories/versionRepository')

const getVersion = () => {
    return versionRepository.getVersion()
}

module.exports = {
    getVersion
}