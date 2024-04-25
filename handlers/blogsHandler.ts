import { Request, Response } from "express";
import { Blog } from "../types/blogs.types";
import { blogs } from "../static/blogs.static";

export const GetBlogs = (_: Request, res: Response): Response<Blog[]> => {
  return res.status(201).send(blogs);
};

export const GetBlogByid = (req: Request, res: Response): Response<Blog> => {
  const blogId = parseInt(req.params.id);

  const blog = blogs.find((blog: Blog) => blog.id === blogId);
  if (!blog) {
    return res.status(404).send("Blog Not Found!!");
  }

  return res.status(201).send(blog);
};

export const CreateBlog = (req: Request, res: Response): Response<string> => {
  // Generate new blog id
  const newBlogId = blogs?.length + 1;

  // Exract new blog details from request body
  const { author, authorContactInfo, title, subTitle, content, tags } =
    req.body;

  // New blog post
  const newBlog: Blog = {
    id: newBlogId,
    author: author,
    authorContactInfo: authorContactInfo,
    title: title,
    subTitle: subTitle,
    content: content,
    tags: tags,
  };

  blogs?.push(newBlog);
  return res.status(201).send("Blog Created Successfuly");
};

export const UpdateBlog = (req: Request, res: Response): Response<string> => {
  const blogId = parseInt(req.params.id);
  const { title, subTitle, content, tags } = req.body;

  // Find the index of the blog post to edit/update
  const blogIndex = blogs?.findIndex((blog: Blog) => blog?.id === blogId);

  // If blog post not found, return 404
  if (blogIndex === -1) {
    return res.status(404).send("Blog Post Not Found!!");
  }

  blogs[blogIndex] = { ...blogs[blogIndex], title, subTitle, content, tags };
  return res
    .status(201)
    .send(
      `Blog "${blogs[blogIndex].title}" By ${blogs[blogIndex].author} Updated Successfully!!`
    );
};

export const DeleteBlog = (req: Request, res: Response): Response<string> => {
  const blogId = parseInt(req.params.id);

  // Find the index of the blog post to delete
  const blogIndex = blogs.findIndex((blog: Blog) => blog?.id === blogId);

  // If blog post not found, return 404
  if (blogIndex === -1) {
    return res.status(404).send("Blog Post Not Found!!");
  }

  blogs.splice(blogIndex, 1);
  return res.status(201).send("Blog Post Deleted Successfully");
};
