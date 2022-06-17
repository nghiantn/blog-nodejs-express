const Posts = require('../models/posts.model')

class postsController {
    home(req, res, next) {
        Posts.find({})
            .then(posts => res.render('home', {
                posts: posts.map(post => post.toObject())
            })
            )
            .catch(next)
    }

    create(req, res, next) {
        res.render('create')
    }
    created(req, res, next) {
        const post = new Posts(req.body)
        post.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    update(req, res, next) {
        Posts.findById(req.params.id)
            .then(post => res.render('edit', {
                post: post.toObject()
            }))
            .catch(next)
    }
    updated(req, res, next) {
        Posts.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    delete(req, res, next) {
        Posts.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new postsController
