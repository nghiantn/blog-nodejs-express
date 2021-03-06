const mongoose = require('mongoose')

const URL = 'mongodb+srv://nghiakinhcung:Nghiakc123@blog.jc1npxi.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connect
