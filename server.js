const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const routs = require('./routes/index');


let app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/posts',routs.posts.getPosts);
app.post('/posts', routs.posts.addPosts);
app.put('/posts/:postId/', routs.posts.updatePosts);
app.delete('/posts/:postId/', routs.posts.removePosts);

app.get('/posts/:postId/comments',routs.comments.getComments);
app.post('/posts/:postId/comments', routs.comments.addComments);
app.put('/posts/:postId/comments/:commentId', routs.comments.updateComments);
app.delete('/posts/:postId/comments/:commentId', routs.comments.removeComments);


app.listen(3000);


