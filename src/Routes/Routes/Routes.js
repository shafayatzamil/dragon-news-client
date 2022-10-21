import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../pages/Home/Home/Home';
import Catagory from '../../pages/Catagory/Catagory/Catagory';
import News from '../../pages/News/News/News';
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../../PrivateRoutes/PrivateRoutes";
import TremsAndCondition from "../../other/TermsAndCondition/TremsAndCondition";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`http://localhost:5000/news`),
            },
            {
                path:'/catagory/:id',
                element:<Catagory></Catagory>,
                loader:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`),
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TremsAndCondition></TremsAndCondition>
            }

        ]
    }
])