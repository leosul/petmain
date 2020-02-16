const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI

//mongodb://admin:)0Custom@ds219839.mlab.com:19839/heroku_72hpp9c8

const connect = () => {
  return mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = { connect, mongoose }

