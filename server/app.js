const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const blogList = require("./data")

const fs = require('fs');

app.use(bodyParser.json());
app.use(cors());

// define port
const port = process.env.PORT || 8000;

// // Static Files - to link client side, change public/css path etc
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/img', express.static(__dirname + 'public/img'))
// app.use('/js', express.static(__dirname + 'public/js'))



app.get('/', (req, res) => {
    res.send("This is the Homepage");
});

const blogRoutes = require("./controllers/blogs");
app.use('/blogs', blogRoutes);

app.get('/blogs', (req, res) => {
    res.send(blogList)
})

app.get('/blogs/:id', (req, res) => {
    try{
      res.send(blogList[req.params.id-1])
    }catch(err){
      console.log(err)
    }
  })

app.listen(port, ()=>{
    console.log(`Express departing now from http://localhost:${port}`)
});


module.exports = app;