import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import LoginPage from "../Auth/LoginPage/LoginPage ";
import SignInPage from "../Auth/SignInPage/SignInPage"
import GameDetails from "../Pages/GameDetails/GameDetails";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Pages/Blogs/Blogs";
import Tournament from "../Pages/Tournament/Tournament";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/games.json')
                    .then((response) => response.json())
            },
            {
                path: '/game/:id',
                loader: () => fetch('/games.json')
                    .then((response) => response.json()),
                element: <PrivateRoutes><GameDetails></GameDetails></PrivateRoutes>
            },

            {
                path: '/login',
                element: <LoginPage></LoginPage>,
            },
            {
                path: '/signin',
                element: <SignInPage></SignInPage>
            },
            {
                path: '/blogs',
                element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>
            },
            {
                path: '/tournament',
                element: <PrivateRoutes><Tournament></Tournament></PrivateRoutes>
            },
            {

                path: '*',
                element: <NotFound></NotFound>,
            },
        ]
    }
]);

export default routes;
