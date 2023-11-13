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
import Login from './pages/LoginRegister/Loginpage';
import Register from './pages/LoginRegister/Registerpage';
import ProtectedRoute from './auth/ProtectRoute';
import Selection from './pages/Selection';
import Uploading from './pages/Uploading';
import Locate from './pages/LocatePage'

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
    {
      path: '/selection',
      element: <ProtectedRoute><Selection/></ProtectedRoute>
    }, 
    {
      path: '/Uploading',
      element: <ProtectedRoute><Uploading/></ProtectedRoute>
    },
    {
      path: '/Locate',
      element: <ProtectedRoute><Locate/></ProtectedRoute>
    }
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
