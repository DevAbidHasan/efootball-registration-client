import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/HomeLayout/Home";
import Registration from "../Pages/other-pages/Registration";
import About from "../Pages/other-pages/About";
import Contact from "../Pages/other-pages/Contact";
import ErrorPage from "../Pages/other-pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : Home
            }
        ]
    },
    {
        path : "/registration",
        Component : Registration
    },
    {
        path : "/about",
        Component : About
    },
    {
        path : "/contact",
        Component : Contact
    },
    {
        path : "*",
        Component : ErrorPage
    }
    
])