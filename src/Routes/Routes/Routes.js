import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../pages/Home/Home/Home';
import Catagory from '../../pages/Catagory/Catagory/Catagory';
import News from '../../pages/News/News/News';

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/catagory/:id',
                element:<Catagory></Catagory>
            },
            {
                path:'/news/:id',
                element:<News></News>
            }
        ]
    }
])