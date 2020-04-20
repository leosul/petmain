const mongoosePaginate = require('mongoose-paginate-v2')
const { mongoose } = require('./../database/connection')

const BreedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    }
})

BreedSchema.plugin(mongoosePaginate)
const Breed = mongoose.model('Breed', BreedSchema)

module.exports = Breed