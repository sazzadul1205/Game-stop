import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound'; 
import LoginPage from "../Auth/LoginPage/LoginPage ";
import SignInPage from "../Auth/SignInPage/SignInPage"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/games.json') 
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
                
                path: '*',
                element: <NotFound></NotFound>,
            },
        ]
    }
]);

export default routes;
