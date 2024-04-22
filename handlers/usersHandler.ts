import { Request, Response } from "express";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    username: "ismailboularbah",
    email: "ismailium01@gmail.com",
    password: "123Pass",
  },
];

export const GetUsers = (_: Request, res: Response) => {
  res.status(201).send(users);
};

export const GetUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  const user = users.find((user: User) => user.id === userId);
  if (!user) {
    return res.status(404).send("User Not Found!!");
  }

  return res.status(201).send(user);
};

export const CreateUser = (req: Request, res: Response) => {
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
    .send(`User ${newUser?.username} Created Sucessfully!!`);
};

export const UpdateUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { username, email, password } = req.body;

  // Find the user by ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // If user not found, return 404
  if (userIndex === -1) {
    return res.status(404).send("User Not Found!!");
  }

  users[userIndex] = { ...users[userIndex], username, email, password };
  res
    .status(201)
    .send(`User ${users[userIndex]?.username} Updated Successfully!!`);
};

export const DeleteUser = (req: Request, res: Response) => {
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
    .send(`User ${users[userIndex]?.username} Deleted Successfully!!`);
};
