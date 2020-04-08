const mongoosePaginate = require('mongoose-paginate-v2')

const { mongoose } = require('./../database/connection')
const ObjectId = mongoose.SchemaTypes.ObjectId

const WalkerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    country: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    text: {
        type: String,
        required: true,
        maxlength: 300,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        maxlength: 15,
        trim: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

WalkerSchema.plugin(mongoosePaginate)
const Walker = mongoose.model('Walker', WalkerSchema)

module.exports = Walker