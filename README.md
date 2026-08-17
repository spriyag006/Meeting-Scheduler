 Meeting Scheduler

A cloud-based **Meeting Scheduler** web application that allows users to register, log in, create meetings, view scheduled meetings, edit meeting details, and delete meetings.

The application uses **Node.js and Express.js** for the backend, **MongoDB Atlas** for cloud database storage, and **Render** for deployment.

---

🚀 Live Application

**Deployed on Render:**
Add your Render URL here:

`https://meeting-scheduler-5gwk.onrender.com`

---

## 📌 Features

* User Registration
* User Login
* Create Meeting
* View My Meetings
* Edit Meeting Details
* Delete Meetings
* Meeting date and time management
* Meeting location
* Meeting description
* MongoDB Atlas cloud database
* REST API based backend
* Responsive web interface
* Cloud deployment using Render

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Cloud & Deployment

* GitHub
* Render

### Other Tools

* VS Code
* npm
* Git

---

## 📂 Project Structure

```text
Meeting-Scheduler/
│
├── fonts/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-meeting.html
│   ├── view-meetings.html
│   └── edit-meeting.html
│
├── models/
│   ├── User.js
│   └── Meeting.js
│
├── routes/
│   ├── auth.js
│   └── meetings.js
│
├── db.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Main Application Flow

```text
User
  │
  ▼
Frontend
HTML + CSS + Bootstrap + JavaScript
  │
  ▼
Express.js REST API
  │
  ▼
Mongoose
  │
  ▼
MongoDB Atlas
```

For the deployed application:

```text
User
  │
  ▼
Render
  │
  ▼
Node.js + Express.js
  │
  ▼
MongoDB Atlas
```

---

🔐 Authentication

Users can:

1. Register an account.
2. Log in using their credentials.
3. Access their dashboard.
4. Create and manage their own meetings.

The logged-in user's ID is used to retrieve their meetings.

---


🔗 API Endpoints

### Authentication

#### Register

```text
POST /auth/register
```

Creates a new user account.

#### Login

```text
POST /auth/login
```

Authenticates a user.

---

### Meetings

#### Create Meeting

```text
POST /meetings
```

Creates a new meeting.

#### Get User Meetings

```text
GET /meetings/:userId
```

Returns meetings belonging to a specific user.

#### Update Meeting

```text
PUT /meetings/:id
```

Updates an existing meeting.

#### Delete Meeting

```text
DELETE /meetings/:id
```

Deletes an existing meeting.

---

## 🗄️ Database

The application uses **MongoDB Atlas** as the cloud database.

The main collections are:

```text
users
meetings
```

### User Data

Users are stored with their account information.

### Meeting Data

Meetings contain information such as:

```text
userId
title
meetingDate
meetingTime
location
description
```

---
🔑 Environment Variables

The application requires a MongoDB connection string.

Create a `.env` file locally:

```text
MONGODB_URI=your_mongodb_atlas_connection_string
```

Example structure:

```text
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/meeting_scheduler?appName=Cluster0
```

**Do not upload the `.env` file to GitHub.**

The `.gitignore` file should include:

```text
node_modules/
.env
```

For Render deployment, add `MONGODB_URI` in the Render **Environment Variables** section.

---

 💻 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/spriyag006/Meeting-Scheduler.git
```

### 2. Open the project

```bash
cd Meeting-Scheduler
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file:

```text
MONGODB_URI=your_mongodb_connection_string
```

### 5. Start the server

```bash
node server.js
```

The application will run locally at:

```text
http://localhost:3000
```

---

 ☁️ Deployment

The application is deployed using **Render**.

### Deployment process

```text
Local Project
      │
      ▼
Git
      │
      ▼
GitHub Repository
      │
      ▼
Render
      │
      ▼
Live Web Application
```

MongoDB Atlas is used as the cloud database.

---

 🌐 Cloud Architecture

```text
              ┌─────────────────┐
              │      User       │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │     Render      │
              │ Node + Express  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  REST API       │
              │ /auth           │
              │ /meetings       │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  MongoDB Atlas  │
              │ Cloud Database  │
              └─────────────────┘
```

---

 🔒 Security

Sensitive information such as database credentials should not be stored directly in the source code.

Environment variables are used to store the MongoDB connection string.

The `.env` file is excluded from GitHub using `.gitignore`.

---

 🧪 Testing

The following features were tested:

* User registration
* User login
* Meeting creation
* Meeting display
* Meeting editing
* Meeting deletion
* MongoDB data storage
* REST API requests
* Render deployment

---

 🎯 Project Objective

The main objective of this project is to develop a simple cloud-based meeting scheduling system where users can manage their meetings through a web application.

The project demonstrates the use of:

* Web development
* REST APIs
* Backend development
* Database integration
* Cloud database
* Git and GitHub
* Cloud deployment

---

 👩‍💻 Author

**Sangeetha Priya**

Artificial Intelligence and Data Science

---

## 📜 License

This project is created for educational and academic purposes.
