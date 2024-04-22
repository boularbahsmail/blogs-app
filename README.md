# Blogs App CMS API

This is the API documentation for the Blog CMS (Content Management System) API. The API provides endpoints to manage blog posts and users.

## Endpoints

### Users

#### Get All Users

- **URL**: `/api/users`
- **Method**: `GET`
- **Description**: Retrieves all users.
- **Response**: 
  - Status Code: `200 OK`
  - Body: Array of user objects.

#### Get User by ID

- **URL**: `/api/users/:id`
- **Method**: `GET`
- **Description**: Retrieves a user by their ID.
- **Parameters**:
  - `id`: User ID
- **Response**:
  - Status Code: `200 OK` if user found, `404 Not Found` if user not found
  - Body: User object if found.

#### Create User

- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Creates a new user.
- **Request Body**: User object (JSON) with fields `username`, `email`, and `password`.
- **Response**:
  - Status Code: `201 Created` if user created successfully
  - Body: New user object.

#### Update User

- **URL**: `/api/users/:id`
- **Method**: `PUT`
- **Description**: Updates an existing user.
- **Parameters**:
  - `id`: User ID
- **Request Body**: User object (JSON) with fields `username`, `email`, and `password`.
- **Response**:
  - Status Code: `200 OK` if user updated successfully, `404 Not Found` if user not found
  - Body: Updated user object.

#### Delete User

- **URL**: `/api/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.
- **Parameters**:
  - `id`: User ID
- **Response**:
  - Status Code: `200 OK` if user deleted successfully, `404 Not Found` if user not found

### Blog Posts

Bblog posts endpoints coming soon..

## Usage

- Clone the repository: `git clone <repository-url>`
- Install dependencies: `npm install`
- Start the server: `npm run dev`
