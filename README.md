# Book Management System

## Project Description

This is a React-based Book Management System that allows users to perform full CRUD operations (Create, Read, Update, Delete) on books. The application is integrated with a mock REST API and provides features such as searching and filtering books by genre. It also includes form validation, loading states, error handling, and toast notifications for user actions.

---

## Features

* Add new books
* Edit existing books
* Delete books with confirmation
* View list of all books
* Search books by title or author
* Filter books by genre
* Form validation for input fields
* Loading and error state handling
* Toast notifications for user actions

---

## Tech Stack

* React.js
* Axios
* JavaScript (ES6+)
* CSS
* MockAPI (for backend simulation)

---

## Project Structure

```
src/
│
├── components/
│   ├── BookCard.jsx
│   ├── BookForm.jsx
│   ├── BookList.jsx
│   ├── SearchBar.jsx
│   └── GenreFilter.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── styles.css
│
├── App.jsx
└── main.jsx
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

---

### 2. Navigate to the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Run the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## API Configuration

This project uses MockAPI for backend operations.

Update the API URL inside:

```
src/services/api.js
```

Example:

```javascript
const API_URL = "https://your-mockapi-url.mockapi.io/books";
```

---

## Live Demo

The project is deployed and accessible at:

[https://book-management-seven-mu.vercel.app/](https://book-management-seven-mu.vercel.app/)

---

## Deployment

The application is deployed using Vercel.

Steps followed:

1. Pushed code to GitHub repository
2. Imported the repository into Vercel
3. Selected framework as Vite (React)
4. Deployed successfully

---

