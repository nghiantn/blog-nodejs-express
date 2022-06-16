const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    author: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Posts', Posts)
