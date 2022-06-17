const postsRouter = require('./posts.route')

function route(app) {

    app.use('/', postsRouter)
}

module.exports = route
