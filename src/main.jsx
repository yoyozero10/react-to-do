import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';
import LoginPae from './pages/login.jsx';
import UsersPage from './pages/users.jsx';
import BookPage from './pages/book.jsx';
import './styles/global.css'
import ToDoApp from './components/todo/ToDoApp.jsx';
import ErrorPage from './pages/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <ToDoApp></ToDoApp>,
      },
      {
        path: "/users",
        element: <UsersPage></UsersPage>,
      },
      {
        path: "/books",
        element: <BookPage></BookPage>,
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPae></LoginPae>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>,
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
