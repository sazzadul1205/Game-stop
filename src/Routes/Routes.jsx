import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../Pages/Home/Home'

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
        ]
    }
])

export default routes;