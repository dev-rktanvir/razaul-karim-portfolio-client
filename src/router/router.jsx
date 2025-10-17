import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import test from "../Pages/test";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about-me',
                Component: AboutMe
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/project',
                Component: ProjectDetails
            },
            {
                path: '/test',
                Component: test
            }
        ]
    }
])