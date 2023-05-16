import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Rootoutlet from './Layout/Rootoutlet';
import App from './App';
import Login from './tables/Login'


const router = createBrowserRouter([
       { 
        path:'/',
        element:<Rootoutlet/>,
        children: [
                {
                    
                    path:'Login',
                    element:<Login/>,
                },
                {
                    index: true,
                    path:'App',
                    element:<App/>,
                },
                {
                    index: true,
                    path:'Logout',
                    element:<Rootoutlet/>,
                },
            ] , 
       }, 
    //    { 
        // path:'/App',
        // element:<App/>}
        ])

const Router = () => {

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default Router;


