import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import Home from "../components/Home";
import Instruction from "../components/Instruction";
import Edit from "../components/Edit";
import Add from "../components/Add";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {index: true, element: <Home/>},
            {path:'recipe/:id', element: <Instruction/>},
            {path:'add', element: <Add/>},
            {path:'edit/:id', element: <Edit/>},
        ]
    }
])
