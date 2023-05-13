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
                element: <Services></Services>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
        ]
    }
])
