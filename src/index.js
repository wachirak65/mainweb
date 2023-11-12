import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import  { UserAuthContextProvider } from './context/UserAuthContext.js';
import  {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from "./App.js";
import WelcomePage from './pages/WelcomePage';
import Login from './pages/Loginpage';
import Register from './pages/Registerpage';
import ProtectedRoute from './auth/ProtectRoute';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/welcome',
      element: <ProtectedRoute><WelcomePage/></ProtectedRoute>
    }, 
    {
      path: '/login',
      element: <Login/>
    }, 
    {
      path: '/register',
      element: <Register/>
    },
   
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <React.StrictMode>
      <UserAuthContextProvider>
        <RouterProvider router={router}/>
      </UserAuthContextProvider>
     
    </React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
