# 📝 Collaborative Task Manager

A full-stack **task management system** built using the **MERN stack** (MongoDB, Express, React, Node.js). This app allows users to create, update, delete, and filter tasks collaboratively with a clean UI and responsive design.

---

## 🚀 Features

- ✅ Create a task with title, description, assignee, and status  
- 🔄 Update task status or details  
- 🗑️ Delete tasks  
- 🔍 Filter tasks by **status** (dropdown) and **assignee** (manual input)  
- 📱 Responsive UI using plain CSS  
- 🧩 Backend follows the **MVC structure**  
- 🔐 RESTful API integrated with React frontend  

---

# 🧰 Tech Stack – Collaborative Task Manager

This document outlines the technologies used in building the **Collaborative Task Manager** project.

---

## 🖼️ Project Structure

- **React (client-side)**
  - `components/` – Navbar and shared components
  - `pages/` – Pages like TaskList, CreateTask, EditTask
  - `App.js` – Route definitions
  - `App.css` – Global styling (plain CSS)

- **Node/Express (server-side)**
  - `controllers/` – Business logic for task CRUD
  - `models/` – Mongoose schema for `Task`
  - `routes/` – API routes
  - `index.js` – Entry point of backend

---


---

## 📥 Endpoints Summary
```
| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/api/`                | Get all tasks (with filters) |
| POST   | `/api/createTask`      | Create a new task            |
| PUT    | `/api/updatetask/:id`  | Update task by ID            |
| DELETE | `/api/deletetask/:id`  | Delete task by ID            |
```
## 2. Backend Setup
``` bash
cd Backend
npm install
```
Create a .env file in the server directory with the following content:

``` bash
MONGO_URI=mongodb://localhost:27017/task-manager
PORT=8080
```
Start the backend server:
``` bash
npm run dev 
```
### 3. 💻 Frontend Setup
Open a new terminal:
``` bash
cd Frontend
npm install
npm run dev 
```

The React frontend will run at:
``` bash
http://localhost:3000
```
And connect to the backend on:
``` bash
http://localhost:8080

```