import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import UsersPage from './pages/users.jsx';
import BookPage from './pages/book.jsx';
import './styles/global.css'
import ToDoApp from './components/todo/ToDoApp.jsx';
import ErrorPage from './pages/error.jsx';
import { AuthWrapper } from './components/context/auth.context';
import PrivateRoute from './pages/private.route.jsx';

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
        element: <PrivateRoute><UsersPage></UsersPage></PrivateRoute>,
      },
      {
        path: "/books",
        element: <PrivateRoute><BookPage/></PrivateRoute>,
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>,
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>,
)
