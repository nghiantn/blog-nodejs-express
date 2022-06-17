const express = require('express')
const router = express.Router()

const postsController = require('../controllers/posts.controller')

router.get('/create', postsController.create)
router.post('/create', postsController.created)

router.get('/:id', postsController.update)
router.put('/:id', postsController.updated)

router.delete('/:id', postsController.delete)

router.get('/', postsController.home)

module.exports = router
