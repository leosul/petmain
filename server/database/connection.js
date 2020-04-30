const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI

//mongodb://localhost:27017/petmain

const connect = () => {
    return mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = { connect, mongoose }