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
        const blogs = blogsData.blogs.map((blog)=> new Blog(blog));
        return blogs;
    }

    static create(blog){
        const newBlogId = blogsData.blogs.length + 1;
        const newBlog = new Blog({id: newBlogId, ...blog});
        blogsData.blogs.push(newBlog);
        return newBlog;
    }
}

class Comment {
    constructor(data) {
        this.id = data.id;
        this.comment = data.comment;
    }

    static get all(){
        const comments = blogsData.comments.map((x)=> new Comment(x));
        return comments;
    }

    static create(com){
        const newCommentId = blogsData.comments.length + 1;
        const newComment = new Comment({id: newCommentId, ...com});
        blogsData.comments.push(newComment);
        return newComment;
    }
}

module.exports = Blog;
