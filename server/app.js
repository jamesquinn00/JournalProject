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
    res.send(blogList)
})

app.listen(port, ()=>{
    console.log(`Express departing now from http://localhost:${port}`)
});