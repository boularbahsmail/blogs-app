export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface SignInType {
  email: string;
  password: string;
}

export interface SignUpType {
  avatar: string;
  first: string;
  last: string;
  username: string;
  email: string;
  password: string;
  role: "Reader" | "Writer";
}
