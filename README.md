#  Smart ToDo API

A secure and scalable RESTful backend API for task management, built using **Node.js**, **Express**, and **MongoDB**.  
This API allows users to register, authenticate using JWT, and manage their personal to-do tasks.

---

##  Features

-  JWT-based user authentication
-  User registration & login
-  Create, Read, Update, Delete (CRUD) tasks
-  User-specific task isolation
-  MongoDB database with Mongoose ODM
-  API tested using Insomnia

---

##  Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Testing Tool:** Insomnia  

---

---

##  API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login & get JWT token |

### Tasks (Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all user tasks |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

> Protected routes require a JWT token in the `Authorization` header:

---

##  API Testing

All API endpoints were tested using **Insomnia**.  
The exported Insomnia collection is included in this repository:


---

##  Environment Variables

Create a `.env` file in the root directory:


---

##  Run the Project Locally

```bash
npm install
npm start



