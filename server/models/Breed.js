const { mongoose } = require('./../database/connection')

const Breed = mongoose.model('Breed', {
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    }
})

module.exports = Breed