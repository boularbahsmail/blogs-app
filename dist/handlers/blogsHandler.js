"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBlog = exports.UpdateBlog = exports.CreateBlog = exports.GetBlogByid = exports.GetBlogs = void 0;
const blogs_static_1 = require("../static/blogs.static");
const GetBlogs = (_, res) => {
    return res.status(201).send(blogs_static_1.blogs);
};
exports.GetBlogs = GetBlogs;
const GetBlogByid = (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs_static_1.blogs.find((blog) => blog.id === blogId);
    if (!blog) {
        return res.status(404).send("Blog Not Found!!");
    }
    return res.status(201).send(blog);
};
exports.GetBlogByid = GetBlogByid;
const CreateBlog = (req, res) => {
    // Generate new blog id
    const newBlogId = (blogs_static_1.blogs === null || blogs_static_1.blogs === void 0 ? void 0 : blogs_static_1.blogs.length) + 1;
    // Exract new blog details from request body
    const { author, authorContactInfo, title, subTitle, content, tags } = req.body;
    // New blog post
    const newBlog = {
        id: newBlogId,
        author: author,
        authorContactInfo: authorContactInfo,
        title: title,
        subTitle: subTitle,
        content: content,
        tags: tags,
    };
    blogs_static_1.blogs === null || blogs_static_1.blogs === void 0 ? void 0 : blogs_static_1.blogs.push(newBlog);
    return res.status(201).send("Blog Created Successfuly");
};
exports.CreateBlog = CreateBlog;
const UpdateBlog = (req, res) => {
    const blogId = parseInt(req.params.id);
    const { title, subTitle, content, tags } = req.body;
    // Find the index of the blog post to edit/update
    const blogIndex = blogs_static_1.blogs === null || blogs_static_1.blogs === void 0 ? void 0 : blogs_static_1.blogs.findIndex((blog) => (blog === null || blog === void 0 ? void 0 : blog.id) === blogId);
    // If blog post not found, return 404
    if (blogIndex === -1) {
        return res.status(404).send("Blog Post Not Found!!");
    }
    blogs_static_1.blogs[blogIndex] = Object.assign(Object.assign({}, blogs_static_1.blogs[blogIndex]), { title, subTitle, content, tags });
    return res
        .status(201)
        .send(`Blog "${blogs_static_1.blogs[blogIndex].title}" By ${blogs_static_1.blogs[blogIndex].author} Updated Successfully!!`);
};
exports.UpdateBlog = UpdateBlog;
const DeleteBlog = (req, res) => {
    var _a;
    const blogId = parseInt(req.params.id);
    // Find the index of the blog post to delete
    const blogIndex = blogs_static_1.blogs.findIndex((blog) => (blog === null || blog === void 0 ? void 0 : blog.id) === blogId);
    // If blog post not found, return 404
    if (blogIndex === -1) {
        return res.status(404).send("Blog Post Not Found!!");
    }
    blogs_static_1.blogs.splice(blogIndex, 1);
    return res
        .status(201)
        .send(`Blog Post '${(_a = blogs_static_1.blogs[blogIndex]) === null || _a === void 0 ? void 0 : _a.title}' Deleted Successfully`);
};
exports.DeleteBlog = DeleteBlog;
//# sourceMappingURL=blogsHandler.js.map