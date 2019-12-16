const express = require('express'); // Définir express

const tags = require('../data/tags');
const posts = require('./posts');

const router = express.Router(); // Définir router avec express

router.get('/', (req, res) => {
  res.json(tags);
});

router.get('/:id', (req, res) => {
  const idTag = Number(req.params.id);
  const foundTag = tags.find((tag) => tag.id === idTag);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

router.use('/:idTag/posts', posts);
module.exports = router;
