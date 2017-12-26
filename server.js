const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const routs = require('./routes/index');


let app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/posts',routs.postRouts.getPosts);
app.post('/posts', routs.postRouts.addPosts);
app.put('/posts/:postId/', routs.postRouts.updatePosts);
app.delete('/posts/:postId/', routs.postRouts.removePosts);

app.get('/posts/:postId/comments',routs.postCommentRouts.getComments);
app.post('/posts/:postId/comments', routs.postCommentRouts.addComments);
app.put('/posts/:postId/comments/:commentId', routs.postCommentRouts.updateComments);
app.delete('/posts/:postId/comments/:commentId', routs.postCommentRouts.removeComments);
// app.put('/posts/:postId',routs.postRouts.getPosts);
// app.delete('/posts/:postId',routs.postRouts.getPosts);

app.listen(3000);


