const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const blogList = require("./data");

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

app.get("/blogs/:id", (req, res) => {
  try {
    res.send(blogList.blogs[req.params.id - 1]);
  } catch (err) {
    console.log(err);
  }
});

// comment routes
app.get("/comments", (req, res) => {
  res.send(blogList.comments);
});

app.get("/comments/:id", (req, res) => {
  try {
    res.send(blogList.comments[req.params.id - 1]);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Express departing now from http://localhost:${port}`);
});
