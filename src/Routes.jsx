import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";

export default function ProjectRoutes(){
    let element = useRoutes([
        {path:"/", element:<Login/>},
        {path:"*", element:<NotFound/>},
        {
           path:"home", element:<Home/>,
        },
    ])
    return element;
};