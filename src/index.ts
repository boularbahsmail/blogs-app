import express, { Request, Response } from "express";

import {
  GetUsers,
  GetUserById,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../handlers/usersHandler";

import {
  CreateBlog,
  DeleteBlog,
  GetBlogByid,
  GetBlogs,
  UpdateBlog,
} from "../handlers/blogsHandler";

// Init new express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Users Endpoints
app.get("/api/users", GetUsers);
app.get("/api/users/:id", GetUserById);
app.post("/api/users/create", CreateUser);
app.put("/api/users/update/:id", UpdateUser);
app.delete("/api/users/delete/:id", DeleteUser);

// Blogs Endpoints
app.get("/api/blogs", GetBlogs);
app.get("/api/blogs/:id", GetBlogByid);
app.post("/api/blogs/create", CreateBlog);
app.put("/api/blogs/update/:id", UpdateBlog);
app.delete("/api/blogs/delete/:id", DeleteBlog);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
