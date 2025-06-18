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

## GET /api/?status=Done&assignto=Prabhakar


**Response:**
```json
[
  {
    "_id": "666a4f8b123abc456def0001",
    "title": "Fix login bug",
    "description": "Handle error on login",
    "assignto": "Prabhakar",
    "status": "Done",
    "createdAt": "2024-06-15T10:20:00Z"
  }
]

```
## ✅ POST /api/createTask

**Description: Create a new task**

Request Body:
```json
{
  "title": "Design UI",
  "description": "Create mockup for homepage",
  "assignto": "Dinesh",
  "status": "To Do"
}
```

**Expected Response:**
```json
{
  "_id": "666a4f8b123abc456def0002",
  "title": "Design UI",
  "description": "Create mockup for homepage",
  "assignto": "Dinesh",
  "status": "To Do",
  "createdAt": "2024-06-15T10:30:00Z"
}
```

## ✅ PUT /api/updatetask/:id

**Description: Update a task by its ID** 

Request Body Example:
``` json 

{
  "status": "In Progress",
  "assignto": "Prabhakar"
}

```
**Expected Response:**

```json 

{
  "_id": "666a4f8b123abc456def0002",
  "title": "Design UI",
  "description": "Create mockup for homepage",
  "assignto": "Prabhakar",
  "status": "In Progress",
  "updatedAt": "2024-06-15T11:00:00Z"
}

```

## ✅ DELETE /api/deletetask/:id
**Description: Delete a task by its ID** 

Expected Response:
```json 
{
  "message": "Task deleted successfully"
}
```