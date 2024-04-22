import express, { Request, Response } from "express";
import {
  GetUsers,
  GetUserById,
  CreateUser,
  UpdateUser,
} from "../handlers/usersHandler";

// Init new express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Users Endpoint
app.get("/api/users", GetUsers);
app.get("/api/users/:id", GetUserById);
app.post("/api/users/create", CreateUser);
app.put("/api/users/update/:id", UpdateUser);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
