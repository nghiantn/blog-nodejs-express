const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema({
    title: { type: String, unique: true },
    description: String,
    image: String,
    author: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Posts', Posts)
