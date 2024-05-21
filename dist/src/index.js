"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersHandler_1 = require("../handlers/usersHandler");
const blogsHandler_1 = require("../handlers/blogsHandler");
// Init new express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Home
app.get("/", (req, res) => {
    res.send("Hello World");
});
// Auth
app.post("/api/auth/sign-in", usersHandler_1.SignIn);
// Users Endpoints
app.get("/api/users", usersHandler_1.GetUsers);
app.get("/api/users/:id", usersHandler_1.GetUserById);
app.post("/api/users/create", usersHandler_1.CreateUser);
app.put("/api/users/update/:id", usersHandler_1.UpdateUser);
app.delete("/api/users/delete/:id", usersHandler_1.DeleteUser);
// Blogs Endpoints
app.get("/api/blogs", blogsHandler_1.GetBlogs);
app.get("/api/blogs/:id", blogsHandler_1.GetBlogByid);
app.post("/api/blogs/create", blogsHandler_1.CreateBlog);
app.put("/api/blogs/update/:id", blogsHandler_1.UpdateBlog);
app.delete("/api/blogs/delete/:id", blogsHandler_1.DeleteBlog);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map