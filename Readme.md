# User Signup API

A simple RESTful API for user registration built with Node.js and Express. It features input validation, password hashing, and persistent storage using a JSON file.

## Features

- **User Registration**: Register new users with username, email, and password.
- **Input Validation**: Ensures all fields are present, email is valid, and password is at least 6 characters.
- **Password Security**: Passwords are hashed using bcrypt before storage.
- **Duplicate Email Check**: Prevents registration with an already registered email.
- **Persistent Storage**: User data is stored in a local `database.json` file.

## Tech Stack

- Node.js
- Express
- bcryptjs
- uuid
- validator

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/RjyavardhanSingh/user-signup-api.git
   cd user-signup-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server

```sh
node server.js
```

The server will start on port 5000 by default, or the port specified in the `PORT` environment variable.

## API Endpoints

### Register User

- **URL**: `/api/users/register`
- **Method**: `POST`
- **Body Parameters**:
  - `username` (string, required)
  - `email` (string, required, must be valid)
  - `password` (string, required, min 6 chars)

#### Example Request

```json
POST /api/users/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePass123"
}
```

#### Example Responses

- **201 Created**

  ```json
  { "message": "User registered successfully" }
  ```

- **400 Bad Request** (missing fields, invalid email, short password, or duplicate email)
  ```json
  { "message": "All fields are required" }
  ```
  ```json
  { "message": "Invalid email format" }
  ```
  ```json
  { "message": "Password must be at least 6 characters long" }
  ```
  ```json
  { "message": "Email already registered" }
  ```

## Project Structure

```
controllers/
  userController.js      # Handles user registration logic
middlewares/
  validateUser.js        # Validates user input
routes/
  userRoutes.js          # API route definitions
database.json            # User data storage
server.js                # Entry point
package.json             # Project metadata and dependencies
```

## Notes

- This project is for demonstration/learning purposes and uses a JSON file for storage. For production, use a real database.
- No authentication or login endpoint is provided.

## License

ISC
