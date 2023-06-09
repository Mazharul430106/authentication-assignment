import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import About from "../../About/About";
import Services from "../../Services/Services";
import Products from "../../Products/Products";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>
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
                path:'*',
                element: <div>Data Not Found</div>
            }
        ]
    }
])

