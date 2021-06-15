// function index(req, res) {
//     const posts = "Posts list";
//     res.send(posts);
// }

const { response } = require('express');
const models = require('../models');

function save(req, res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;
    models.Post.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong!"
        });
    });
}

function index(req, res){
    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        });
    });
}

function update(req, res){
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
    }
    const userId = 1;

    models.Post.update(updatedPost, {where: {id:id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Post updated succesfully",
            post: updatedPost
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    })
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
}