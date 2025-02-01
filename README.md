# Project Management System API

## Overview
This is a RESTful API for a **Project Management System** where users can **create and manage projects, assign tasks, and track task statuses**. The API is built using **Node.js, Express, Prisma ORM, and PostgreSQL** with **JWT authentication** for secure access.

## Features
- **User Management**: Create, update, delete, and list users.
- **Project Management**: Create, update, delete, and list projects.
- **Task Management**: Add tasks to projects, assign users to tasks, and update task statuses.
- **Authentication**: Secure API routes with JWT.
- **Filtering**: Filter tasks by status and assigned user.
- **Role-Based Permissions**: Only assigned users can modify projects/tasks.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: bcrypt.js

---

## Installation
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/project-management-api.git
cd project-management-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/projectdb
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Set Up Prisma and Database
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the Server
```sh
npm start
```
The server will start at `http://localhost:5000`

---

## API Endpoints
### User Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/users` | Create a new user |
| GET | `/users` | List all users |
| PUT | `/users/:id` | Update user details |
| DELETE | `/users/:id` | Delete a user |

### Authentication Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and get a JWT token |
| POST | `/auth/logout` | Logout user |

### Project Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/projects` | Create a project |
| GET | `/projects` | List all projects |
| GET | `/projects/:id` | Get a project by ID |
| PUT | `/projects/:id` | Update a project |
| DELETE | `/projects/:id` | Delete a project |

### Task Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/projects/:projectId/tasks` | Create a task under a project |
| GET | `/projects/:projectId/tasks` | List tasks for a project |
| PUT | `/tasks/:id` | Update task details or status |
| DELETE | `/tasks/:id` | Delete a task |

### Filtering and Search
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/tasks?status=IN_PROGRESS&assignedUserId=uuid` | Filter tasks by status and assigned user |

---

## Authentication and Authorization
- **JWT Authentication** is used to secure all endpoints.
- Include a `Bearer token` in the `Authorization` header when making requests.
- Example:
```sh
curl -X GET http://localhost:5000/projects \  
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## Testing the API
- Use **Postman** or **cURL** to test the API.
- Example request to create a user:
```sh
curl -X POST http://localhost:5000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
```

---

## Future Enhancements
- Implement pagination for listing endpoints.
- Add real-time notifications.
- Improve role-based access control.

---

## License
This project is open-source and available under the **MIT License**.

---



