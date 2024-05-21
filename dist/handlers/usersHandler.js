"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.UpdateUser = exports.CreateUser = exports.GetUserById = exports.GetUsers = exports.SignIn = void 0;
const users_static_1 = require("../static/users.static");
const supabase_1 = require("../db/supabase");
// Sign in handler
const SignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract user credintels from request body
    const { email, password } = req.body;
    // Launch sjpabase built-in sign in function
    const { data, error } = yield supabase_1.supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        return res.status(403).send(`Error signing: ${error.message}`);
    }
    console.log("User data:", data);
    return res.status(201).send("Signed in successfully!!");
});
exports.SignIn = SignIn;
// Sign up handler
const SignUp = () => { };
// Check auth
const CheckAuth = () => { };
// Fetch all users
const GetUsers = (_, res) => {
    return res.status(201).send(users_static_1.users);
};
exports.GetUsers = GetUsers;
// Fetch user by id
const GetUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users_static_1.users.find((user) => user.id === userId);
    if (!user) {
        return res.status(404).send("User Not Found!!");
    }
    return res.status(201).send(user);
};
exports.GetUserById = GetUserById;
// Create new user
const CreateUser = (req, res) => {
    // Generate new user's id
    const newUserId = (users_static_1.users === null || users_static_1.users === void 0 ? void 0 : users_static_1.users.length) + 1;
    // Extract user details from request body
    const { username, email, password } = req.body;
    // New user
    const newUser = {
        id: newUserId,
        username: username,
        email: email,
        password: password,
    };
    const existingUser = users_static_1.users.find((user) => user.username === username || user.email === email);
    if (existingUser) {
        return res
            .status(400)
            .send("User with the same username or email already exists!!");
    }
    users_static_1.users.push(newUser);
    return res
        .status(201)
        .send(`User ${newUser === null || newUser === void 0 ? void 0 : newUser.username} Created Successfully!!`);
};
exports.CreateUser = CreateUser;
// Update user data by id
const UpdateUser = (req, res) => {
    var _a;
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;
    // Find the user by ID
    const userIndex = users_static_1.users.findIndex((user) => user.id === userId);
    // If user not found, return 404
    if (userIndex === -1) {
        return res.status(404).send("User Not Found!!");
    }
    users_static_1.users[userIndex] = Object.assign(Object.assign({}, users_static_1.users[userIndex]), { username, email, password });
    return res
        .status(201)
        .send(`User ${(_a = users_static_1.users[userIndex]) === null || _a === void 0 ? void 0 : _a.username} Updated Successfully!!`);
};
exports.UpdateUser = UpdateUser;
// Delete an existing user by id
const DeleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    // Find the index of the user to delete
    const userIndex = users_static_1.users.findIndex((user) => user.id === userId);
    // If user not found, return 404
    if (userIndex === -1) {
        return res.status(404).send("User Not Found!!");
    }
    users_static_1.users.splice(userIndex, 1);
    return res.status(201).send(`User Deleted Successfully!!`);
};
exports.DeleteUser = DeleteUser;
//# sourceMappingURL=usersHandler.js.map