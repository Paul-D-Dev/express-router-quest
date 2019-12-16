// Routes pour récupérer les articles
const express = require('express'); // Définir express

const router = express.Router({ mergeParams: true }); // Définir router avec express
const fakePosts = require('../data/posts'); // Importer des fichiers contenant les posts.
const comments = require('./comments');

router.get('/', (req, res) => {
  res.json(fakePosts);
});

router.get('/:id', (req, res) => {
  // Find the post in the array that has the id given by req.params.id
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const postId = Number(req.params.id);
  const foundPost = fakePosts.find((post) => post.id === postId);
  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});

router.use('/:postId/comment', comments); // run node index.js   http://localhost:8000/api/posts/1/comment


module.exports = router; // permet d'importer le router dans un autre fichier
