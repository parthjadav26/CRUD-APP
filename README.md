
# 👨‍💼 Employee Management System – CRUD APP

A full-stack **Employee Management System** built with **React (Vite + Tailwind)**, **Node.js**, **Express.js**, and **PostgreSQL**, with full **CRUD (Create, Read, Update, Delete)** functionality.

---

## 🚀 Features

- ➕ Add new employees  
- 📋 View list of all employees  
- ✏️ Edit employee information  
- ❌ Delete employee records  
- 💻 Clean UI with reusable components (React + Tailwind)  

---

## 🛠️ Tech Stack

| Layer        | Technology          |
|--------------|---------------------|
| Frontend     | React.js (Vite, TailwindCSS) |
| Backend      | Node.js, Express.js |
| Database     | PostgreSQL          |
| Communication| RESTful APIs        |

---

## 📁 Project Structure

```
CRUD-APP/
│
├── Backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── db.js
│   │   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ModelForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Tablelist.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup Guide

### 📦 Prerequisites

- Node.js and npm  
- PostgreSQL  
- Git  

### 🔧 Backend Setup

```bash
cd Backend
npm install
# Update .env with your PostgreSQL credentials
npm start
```

### 🌐 Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### 🛢️ PostgreSQL Setup

1. Create a PostgreSQL database:

```sql
CREATE DATABASE employee_db;
```

2. Add DB credentials to `.env` file in Backend folder:

```env
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_password
DB_NAME=employee_db
DB_PORT=5432
```


---

## 🧪 Sample API Endpoints

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | /api/employees     | Get all employees     |
| POST   | /api/employees     | Add a new employee    |
| PUT    | /api/employees/:id | Update employee by ID |
| DELETE | /api/employees/:id | Delete employee by ID |

---

## 📸 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4854e671-7eea-487f-92d3-2c10d69c912c" />
<img width="523" height="366" alt="image" src="https://github.com/user-attachments/assets/e201587e-072e-4a45-a363-c266e2cbb749" />
<img width="524" height="367" alt="image" src="https://github.com/user-attachments/assets/d48635f8-fb19-49e1-91dd-132fecbd0397" />
---


> 🔨 Developed by Parth Jadav with ❤️ using Vite + React + Tailwind + Express + PostgreSQL
