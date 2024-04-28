import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Details from './pages/Details';
import PrivateRoute from './components/PrivateRouter';
import Add from './pages/Add';
import MyList from './pages/MyList';
import AllSpot from './pages/AllSpot';
// import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tourspot'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/tourspot/id/${params.id}`)
      },
      {
        path: '/addtouristspot',
        element: <Add></Add>
      },
      {
        path: '/mylist',
        element: <MyList></MyList>
      },
      {
        path: '/alltouristspot',
        element: <AllSpot></AllSpot>,
        loader: () => fetch('http://localhost:5000/tourspot'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
      />
    </AuthProvider>
  </React.StrictMode>
);
