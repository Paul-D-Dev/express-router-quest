const express = require('express');
const comments = require('./routes/comments');
const posts = require('./routes/posts');

const app = express();
const port = 8000;

// // Get a list of posts
// app.get('/api/posts', (req, res) => {
//   res.json(fakePosts);
// });

// // Get a single post
// app.get('/api/posts/:id', (req, res) => {
//   // Find the post in the array that has the id given by req.params.id
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//   const postId = Number(req.params.id);
//   const foundPost = fakePosts.find((post) => post.id === postId);
//   if (!foundPost) {
//     return res.status(404).json({
//       error: 'Post not found',
//     });
//   }
//   return res.json(foundPost);
// });

app.use('/api/comments', comments); // permet de connecter le router et ses routes au système de routage fourni par app
app.use('/api/posts', posts);
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
