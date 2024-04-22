import express, { Request, Response } from "express";

// Init new express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
