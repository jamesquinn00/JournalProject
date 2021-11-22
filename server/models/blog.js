const blogsData = require('../data')

// define Blog class
class Blog {
    constructor(data) {
        this.id = data.id;
        this.heading = data.heading;
        this.content = data.content;
        this.image = data.image;
    }

    static get all(){
        const blogs = blogsData.map((blog)=> new Blog(blog));
        return blogs;
    }

    static create(blog){
        const newBlogId = blogsData.length + 1;
        const newBlog = new Blog({id: newBlogId, ...blog});
        blogsData.push(newBlog);
        return newBlog;
    }
}

module.exports = Blog;
