const express = require('express');
// const comments = require('./routes/comments'); // Déplacer dans routes/index
// const posts = require('./routes/posts'); // Déplacer dans routes/index
const api = require('./routes'); // Dans notre cas, pas besoin de préciser .routes/index
// car NodeJs va automatiquement chercher un index.js


const app = express();
const port = 8000;


app.use('/api', api); // permet de connecter le router comments et ses routes au système de routage fourni par app

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
