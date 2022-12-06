const { Router } = require('express');
const authenticate = require('../middleware/authenticate.js');
const Post = require('../models/Posts.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const posts = await Post.getAllPosts();
      res.json(posts);
    } catch (e) {
      next(e);
    }
  })
  .post('/', authenticate, async (req, res, next) => {
    try {
      const newPost = await Post.insert(req.body);
      res.json(newPost);
    } catch (e) {
      next(e);
    }
  });
