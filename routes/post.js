const db = require('./index');

module.exports = {
    getPosts(req, res) {
        res.send(db.obj.posts);
    },
    addPosts(req, res) {
        db.obj.posts.push(req.body);
        res.status(200).send({ id: db.obj.posts.length });
    },
    updatePosts(req, res) {
        db.obj.posts[req.params.postId] = req.body;
        res.status(201).send(req.body);
    },
    removePosts(req, res) {
        db.obj.posts.splice(req.params.postId, 1);
        res.status(201).send();
    },
};