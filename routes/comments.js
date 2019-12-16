const express = require('express');

const router = express.Router(); // Création du router
const fakeComments = require('../data/comments');


router.get('/', (req, res) => { // utilisation de router à la place de app modification du nom de la route url
  res.json(fakeComments);
});


module.exports = router; // permet d'importer le router dans un autre fichier
