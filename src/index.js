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
import Selection from './pages/Selection.js';
import JoinProjectPage from './pages/JoinProjectPage.js';
import DragArea_2 from './pages/DragArea_2.js';
import ChoosePage from './pages/ChoosePage.js';
import PublicProjectPage from './pages/PublicProjectPage.js';
import ShowArea from './pages/ShowArea.js';
import ShowAlocate from './pages/ShowAlocate.js';
import WeatherAnalysisPage from './pages/WeatherAnalysisPage.js';
import Areadata from './pages/Areadata.js';
import { CreateProjectContextProvider } from "./context/CreateProjectContet";
import Uploading from './pages/CreateProject/Uploading';
import Locate from './pages/CreateProject/LocatePage';

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
      path: '/joinproject',
      element: <ProtectedRoute><JoinProjectPage/></ProtectedRoute>
    },
    {
      path: '/Uploading',
      element: <ProtectedRoute><Uploading/></ProtectedRoute>
    },
    {
      path: '/Locate',
      element: <ProtectedRoute><Locate/></ProtectedRoute>
    },
    {
      path: '/dragareas',
      element: <ProtectedRoute><DragArea_2/></ProtectedRoute>
    },
    {
      path: '/areadata',
      element: <ProtectedRoute><Areadata/></ProtectedRoute>
    }
    ,
    {
      path: '/choosepage',
      element: <ProtectedRoute><ChoosePage/></ProtectedRoute>
    }
    ,
    {
      path: '/publicproject',
      element: <ProtectedRoute><PublicProjectPage/></ProtectedRoute>
    },
    {
      path: '/showArea',
      element: <ProtectedRoute><ShowArea/></ProtectedRoute>
    },
    {
      path: '/showalocate',
      element: <ProtectedRoute><ShowAlocate/></ProtectedRoute>
    },
    {
      path: '/weatheranalysis',
      element: <ProtectedRoute><WeatherAnalysisPage/></ProtectedRoute>
    }
   
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <React.StrictMode>
      <UserAuthContextProvider>
        <CreateProjectContextProvider>
          <RouterProvider router={router}/>
        </CreateProjectContextProvider>
      </UserAuthContextProvider>
      
     
    </React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
