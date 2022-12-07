const express = require('express')
const router = express.Router()
const authenticate = require('../auth/middleware')
const { getAllPosts, createPost, deletePost, editPost } = require('./controller')

router.get('/', getAllPosts)
router.post('/', authenticate, createPost)
router.delete('/:id', authenticate, deletePost)
router.put('/:id', authenticate, editPost)

module.exports = router
