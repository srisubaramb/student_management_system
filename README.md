# 🎓 Student Management Portal (LMS)

A full-stack Learning Management System (LMS) / Student Management Portal built using the MERN stack. This project allows administrators to manage students and courses through a clean, responsive dashboard while following modern React development practices.

---

## 📌 Features

### 👨‍🎓 Student Management

- Add new students
- Edit student details
- Delete students
- View all students
- Assign courses to students
- Store student information securely

### 📚 Course Management

- Create new courses
- Update course details
- Delete courses
- View all available courses

### 🔐 Authentication & Authorization

- JWT Authentication
- Protected Routes
- Role-based Access Control (Admin/User)

### 🎨 User Interface

- Responsive Dashboard
- Reusable UI Components
- Clean Form Validation
- Loading States
- Error Handling

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JSON Web Token (JWT)
- bcryptjs

---

# 📖 What I Learned

This project helped me gain hands-on experience with modern full-stack web development.

## React

- Functional Components
- JSX
- Props
- State Management
- useState
- useEffect
- useNavigate
- useParams
- Conditional Rendering
- Component Composition

---

## React Router

- BrowserRouter
- Routes
- Route
- Navigate
- Protected Routes
- Dynamic Routes

Example:

```
/student/:id
/course/:id
```

---

## Redux Toolkit

- Store Configuration
- Slices
- Actions
- Reducers
- useDispatch()
- useSelector()

Used Redux for authentication state management.

---

## Reusable Components

Instead of repeating UI code, reusable components were created.

### TextInput Component

Used for:

- Student Form
- Course Form
- Login Form
- Register Form

Example:

```jsx
<TextInput
    label="Student Name"
    value={student.name}
    onChange={handleChange}
/>
```

---

### PrimaryButton Component

Used throughout the application.

```jsx
<PrimaryButton
    value="Save"
/>
```

---

### Form Component

Common form wrapper for:

- Student Form
- Course Form

This reduces duplicate code and improves maintainability.

---

## React Hooks

Used

- useState
- useEffect
- useNavigate
- useParams

---

## API Integration

Used Axios to communicate with the backend.

Example

```javascript
const res = await api.get("/student");
```

Implemented

- GET
- POST
- PUT
- DELETE

operations.

---

## Backend

Learned how to build REST APIs using

- Express.js
- Node.js

Created

- Controllers
- Routes
- Middleware

---

## MongoDB

Worked with

- Collections
- Documents
- CRUD Operations

Using

- Mongoose Models
- Schema Validation

---

## Authentication

Implemented

- JWT Authentication
- Password Hashing
- Protected Routes
- Admin Authorization

---

## Form Handling

Learned

- Controlled Components
- Input Validation
- Form Submission
- Error Handling

---

## Folder Organization

Organized the project into

- Components
- Pages
- Redux
- Utils
- Controllers
- Routes
- Models
- Middleware

making the project easier to scale.

---

# 🚀 API Endpoints

## Authentication

```
POST   /auth/login
POST   /auth/register
```

## Students

```
GET      /student
GET      /student/:id
POST     /student
PUT      /student/:id
DELETE   /student/:id
```

## Courses

```
GET      /course
GET      /course/:id
POST     /course
PUT      /course/:id
DELETE   /course/:id
```

---

# 💻 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/student-management-portal.git
```

---




# 🎯 Key Concepts Practiced

- React Components
- Reusable UI Design
- React Hooks
- React Router
- Redux Toolkit
- Axios
- REST APIs
- CRUD Operations
- JWT Authentication
- MongoDB
- Express.js
- Node.js
- Tailwind CSS
- MVC Architecture
- Folder Structure
- Form Validation
- State Management
- Protected Routes
- Clean Code Practices

---

# 👨‍💻 Author

**Srisubaram B**

- GitHub: <https://github.com/srisubaramb>
- LinkedIn: <https://linkedin.com/in/srisubaramb>

---

## ⭐ If you found this project useful, consider giving it a Star
