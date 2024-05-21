import { Request, Response } from "express";
import { users } from "../static/users.static";
import { SignInType, User } from "../types/users.types";
import { supabase } from "../db/supabase";

// Sign in handler
export const SignIn = async (
  req: Request,
  res: Response
): Promise<Response<string>> => {
  // Extract user credintels from request body
  const { email, password }: SignInType = req.body;

  // Call supabase built-in sign in function
  const { data: user, err: signInErr } = await supabase.auth.signInWithPassword(
    {
      email,
      password,
    }
  );

  if (signInErr) {
    return res.status(403).send(`Error signing in: ${signInErr.message}`);
  }
  console.log("User data:", user);
  return res.status(201).send("Signed in successfully!!");
};

// Sign up handler
export const SignUp = async (
  res: Response,
  req: Request
): Promise<Response<string>> => {
  // Extract new user info from request body
  const {
    avatar,
    first,
    last,
    username,
    email,
    password,
    role,
  }: SignInType | any = req.body;

  // Call supabase built-up sign in function
  const { data: user, err: signUpErr }: any = supabase.auth.SignUp({
    email: email,
    password: password,
  });

  if (signUpErr) {
    return res.status(403).send(`Error signing up: ${signUpErr.message}`);
  }

  try {
    const { data, err } = await supabase.from("users").insert({
      avatar: avatar,
      first: first,
      last: last,
      username: username,
      email: email,
      role: role,
    });
  } catch (err) {
    return res.status(403).send(`Error adding new user: ${err}`);
  }

  console.log("User data:", user);
  return res.status(201).send("Signed up successfully!!");
};

// Check auth
const CheckAuth = (): void => {};

// Fetch all users
export const GetUsers = (_: Request, res: Response): Response<User[]> => {
  return res.status(201).send(users);
};

// Fetch user by id
export const GetUserById = (req: Request, res: Response): Response<User> => {
  const userId = parseInt(req.params.id);

  const user = users.find((user: User) => user.id === userId);
  if (!user) {
    return res.status(404).send("User Not Found!!");
  }

  return res.status(201).send(user);
};

// Create new user
export const CreateUser = (req: Request, res: Response): Response<string> => {
  // Generate new user's id
  const newUserId = users?.length + 1;

  // Extract user details from request body
  const { username, email, password } = req.body;

  // New user
  const newUser: User = {
    id: newUserId,
    username: username,
    email: email,
    password: password,
  };

  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );

  if (existingUser) {
    return res
      .status(400)
      .send("User with the same username or email already exists!!");
  }

  users.push(newUser);
  return res
    .status(201)
    .send(`User ${newUser?.username} Created Successfully!!`);
};

// Update user data by id
export const UpdateUser = (req: Request, res: Response): Response<string> => {
  const userId = parseInt(req.params.id);
  const { username, email, password } = req.body;

  // Find the user by ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // If user not found, return 404
  if (userIndex === -1) {
    return res.status(404).send("User Not Found!!");
  }

  users[userIndex] = { ...users[userIndex], username, email, password };
  return res
    .status(201)
    .send(`User ${users[userIndex]?.username} Updated Successfully!!`);
};

// Delete an existing user by id
export const DeleteUser = (req: Request, res: Response): Response<string> => {
  const userId = parseInt(req.params.id);

  // Find the index of the user to delete
  const userIndex = users.findIndex((user) => user.id === userId);

  // If user not found, return 404
  if (userIndex === -1) {
    return res.status(404).send("User Not Found!!");
  }

  users.splice(userIndex, 1);
  return res.status(201).send(`User Deleted Successfully!!`);
};
