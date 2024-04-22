"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Init new express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Home
app.get("/", (req, res) => {
    res.send("Hello World");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
