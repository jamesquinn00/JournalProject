const express = require("express");
const router = express.Router();

// require Blog class
const Blog = require("../models/blog");

router.get('/', (req,res)=>{
    const blogsData = Blog.all;
    res.send(blogsData);
});

router.post('/', (req, res)=>{
    const data = req.body;
    const newBlog = Blog.create(data);
    res.send({message: `${newBlog.heading} successfully added to our collection.`});
});

module.exports = router;