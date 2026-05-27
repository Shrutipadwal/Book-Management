Book Management System

Project Description

This is a React-based Book Management System that allows users to perform full CRUD operations (Create, Read, Update, Delete) on books. The application is integrated with a mock REST API and provides features such as searching and filtering books by genre. It also includes form validation, loading states, and basic error handling.

Features
Add new books
Edit existing books
Delete books with confirmation
View list of all books
Search books by title or author
Filter books by genre
Form validation for input fields
Loading and error state handling
Toast notifications for user actions
Tech Stack
React.js
Axios
JavaScript (ES6+)
CSS
MockAPI (for backend simulation)
Project Structure

src/
components/
BookCard.jsx
BookForm.jsx
BookList.jsx
SearchBar.jsx
GenreFilter.jsx

services/
api.js

styles/
styles.css

App.jsx
main.jsx

Setup Instructions
1. Clone the repository
git clone YOUR_REPOSITORY_URL
2. Navigate to the project folder
cd YOUR_PROJECT_FOLDER
3. Install dependencies
npm install
4. Run the development server
npm run dev

The application will run on:
http://localhost:5173

Build for Production
npm run build
API Configuration

This project uses MockAPI for backend operations.

Update the API URL inside:

src/services/api.js

Example:

const API_URL = "https://your-mockapi-url.mockapi.io/books";


Deployment
The application can be deployed using platforms such as Vercel or Netlify.