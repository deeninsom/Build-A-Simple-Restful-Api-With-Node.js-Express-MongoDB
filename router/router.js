const express = require('express');
const { set } = require('mongoose');
const models = require('../model/models');
const route = express.Router();
const model = require('../model/models')

route.get('/', async (req, res) =>{
    try {
        const Find = await models.find();
        res.json(Find)  
    } catch (error) {
        res.json({ message : error})
    }
})

route.get('/:postId', async (req,res) =>{
    try {
        const findPost = await models.findById(req.params.postId);
        res.json(findPost)
    } catch (error) {
        res.json({ message : error})
    }
})

route.post('/user', async (req,res) =>{
    const post = new models({
        title: req.body.title,
        deskripsi: req.body.deskripsi
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (error) {
        res.json({ message : error})
    }
})

route.patch('/:postId', async (req,res) =>{
    try {
        const updatePost = await models.updateOne(
            {_id : req.params.postId},
            {
                $set : {
                    title: req.body.title,
                    deskripsi: req.body.deskripsi
                }
            }
        )
        res.json(updatePost)
    } catch (error) {
        res.json({ message : error})
    }
})

route.delete('/:postId', async (req,res) =>{
    try {
        const removePost = await models.remove({ _id : req.params.postId})
        res.json(removePost)
    } catch (error) {
        res.json({ message : error})
    }
})

module.exports = route;