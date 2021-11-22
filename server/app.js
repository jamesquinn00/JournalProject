const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const blogList = require("./data")

app.use(bodyParser.json());
app.use(cors());

// define port
const port = 3000;

app.get('/', (req, res) => {
    res.send("This is the Homepage");
});

const blogRoutes = require("./controllers/blogs");
app.use('/blogs', blogRoutes);

app.get('/blogs', (req, res) => {
    res.send(blogList.blogs)
})

app.get('/blogs/:id', (req, res) => {
    try{
      res.send(blogList.blogs[req.params.id-1])
    }catch(err){
      console.log(err)
    }
  })

// comment routes
app.get('/comments', (req, res) => {
    res.send(blogList.comments)
})

app.get('/comments/:id', (req, res) => {
    try{
      res.send(blogList.comments[req.params.id-1])
    }catch(err){
      console.log(err)
    }
  })

app.listen(port, ()=>{
    console.log(`Express departing now from http://localhost:${port}`)
});