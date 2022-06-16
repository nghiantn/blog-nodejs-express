const Posts = require('../models/posts.model')

class postsController {
    index(req, res, next) {
        Posts.find({})
            .then(posts => res.render('404', { posts })
            )
            .catch(next)
    }
}

module.exports = new postsController
