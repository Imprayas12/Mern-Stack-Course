const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        maxLength: 25
    },
    date: {
        type: Number,
    },
    ratings: {
        type: Number,
        required: [true, "You must provide a rating!!"],
        min: 1,
        max: 10
    },
    isWatched: {
        type: Boolean,
        default: false
    }
})

const serie = mongoose.model('serie',schema);
module.exports = serie;