const express = require('express');

const router = express.Router({ mergeParams: true });
const fakeComments = require('../data/comments');


router.get('/', (req, res) => { // utilisation de router à la place de app modification du nom de la route url
  // If we forget { mergeParams: true }, req.params.postId will be `undefined`
  const postId = Number(req.params.postId);
  // Keep only comments whose post_id matches the postId parameter
  const postComments = fakeComments.filter((comment) => comment.post_id === postId);
  res.json(postComments);
});

router.get('/all', (req, res) => {

  res.json(fakeComments);
});


module.exports = router; // permet d'importer le router dans un autre fichier
