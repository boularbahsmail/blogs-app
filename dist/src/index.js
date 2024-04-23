"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersHandler_1 = require("../handlers/usersHandler");
// Init new express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Home
app.get("/", (req, res) => {
    res.send("Hello World");
});
// Users Endpoint
app.get("/api/users", usersHandler_1.GetUsers);
app.get("/api/users/:id", usersHandler_1.GetUserById);
app.post("/api/users/create", usersHandler_1.CreateUser);
app.put("/api/users/update/:id", usersHandler_1.UpdateUser);
app.delete("/api/users/delete/:id", usersHandler_1.DeleteUser);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map