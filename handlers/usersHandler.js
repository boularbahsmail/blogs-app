"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.UpdateUser = exports.CreateUser = exports.GetUserById = exports.GetUsers = void 0;
const users = [
    {
        id: 1,
        username: "ismailboularbah",
        email: "ismailium01@gmail.com",
        password: "123Pass",
    },
];
const GetUsers = (_, res) => {
    res.status(201).send(users);
};
exports.GetUsers = GetUsers;
const GetUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (!user) {
        return res.status(404).send("User Not Found!!");
    }
    return res.status(201).send(user);
};
exports.GetUserById = GetUserById;
const CreateUser = (req, res) => {
    // Generate new user's id
    const newUserId = (users === null || users === void 0 ? void 0 : users.length) + 1;
    // Extract user details from request body
    const { username, email, password } = req.body;
    // New user
    const newUser = {
        id: newUserId,
        username: username,
        email: email,
        password: password,
    };
    const existingUser = users.find((user) => user.username === username || user.email === email);
    if (existingUser) {
        return res
            .status(400)
            .send("User with the same username or email already exists!!");
    }
    users.push(newUser);
    return res
        .status(201)
        .send(`User ${newUser === null || newUser === void 0 ? void 0 : newUser.username} Created Sucessfully!!`);
};
exports.CreateUser = CreateUser;
const UpdateUser = (req, res) => {
    var _a;
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;
    // Find the user by ID
    const userIndex = users.findIndex((user) => user.id === userId);
    // If user not found, return 404
    if (userIndex === -1) {
        return res.status(404).send("User Not Found!!");
    }
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), { username, email, password });
    res
        .status(201)
        .send(`User ${(_a = users[userIndex]) === null || _a === void 0 ? void 0 : _a.username} Updated Successfully!!`);
};
exports.UpdateUser = UpdateUser;
const DeleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    // Find the index of the user to delete
    const userIndex = users.findIndex((user) => user.id === userId);
    // If user not found, return 404
    if (userIndex === -1) {
        return res.status(404).send("User Not Found!!");
    }
    users.splice(userIndex, 1);
    res
        .status(201)
        .send(`User Deleted Successfully!!`);
};
exports.DeleteUser = DeleteUser;
