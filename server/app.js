const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// const blogList = require("./data");

// importing all helper functions 
const db = require('./database');

app.use(bodyParser.json());
app.use(cors());

// define port
const port = 3001;

app.get("/", (req, res) => {
  res.send("This is the Homepage");
});


app.get("/blogs", (req, res) => {
  try{
    db.retrieveAllBlogs((err, data) => res.send(data));
  }
  catch (err){
    console.log(err)
  }
})


app.get('/blogs/:id', (req, res) => {
  const cb = (err, blog) => res.send(blog);
  const blogId = req.params.id.toString();
  try{
    db.retrieveBlog(blogId, cb);
  } catch(err){
    console.log(err)
  }
})

app.post('/newBlog', (req, res) => {
  const newBlog = req.body
  console.log(newBlog)
  try {
    db.writeBlog(newBlog) 
    console.log(newBlog)
    res.send('Your blog has been posted')
  }catch (err){
    console.log(err)
  }
})

app.listen(port, ()=>{
    console.log(`Express departing now from http://localhost:${port}`)
});

