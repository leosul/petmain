const mongoosePaginate = require('mongoose-paginate-v2')

const { mongoose } = require('./../database/connection')
const ObjectId = mongoose.SchemaTypes.ObjectId

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    breed: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    size: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    weight: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

PetSchema.plugin(mongoosePaginate)
const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet