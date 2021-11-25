// method1: retrieve all blogs
// method2: retrieve certain blog
// method3: write a blog 

// helper methods to read and write 

const fs = require('fs');
const filePath = 'server/data.json';

//  read database async
function readDatabase(cb){
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
          return cb && cb(err);
        }
        try {
          const object = JSON.parse(fileData);
          return cb && cb(null, object);
        } catch (err) {
          return cb && cb(err);
        }
    });
};

// write database async 
function writeDatabase(data){
    const jsonString = JSON.stringify(data)
    fs.writeFile(filePath, jsonString, err => {
        if (err){
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
};

// method1: retrieve all blogs 
function retrieveAllBlogs(cb){
    return readDatabase(cb);
};

//method2: retrieve a blog 
function retrieveBlog(blogID, cb){
    // Define a new callback which selects corrct blog and calls cb(correctBlog)
    const newCb = (err, data) => {
        const theBlog = data[blogID];
        cb(err, theBlog);
    }
    return readDatabase(newCb);
}

// method3: write a blog 
function writeBlog(newBlog){
    // read existing data first 
    const cb = (err, data) => {
        // check if theres an id inside new blog  
        if (!newBlog.hasOwnProperty("id")){
            const newId = Object.keys(data).length + 1;
            newBlog['id'] = newId;
        } 
        data[newBlog['id'].toString()] = {...data[newBlog['id'].toString()], ...newBlog};
        writeDatabase(data);
    }
    readDatabase(cb);

}

module.exports = {retrieveAllBlogs, writeBlog, retrieveBlog};



