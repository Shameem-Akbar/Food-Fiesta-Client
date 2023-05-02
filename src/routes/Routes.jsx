import React from 'react';
import {
    Navigate,
    createBrowserRouter
} from "react-router-dom";
import LoginLayout from '../layouts/LoginLayout';
import Main from '../layouts/Main';
import RecipeLayout from '../layouts/RecipeLayout';
import Chef from '../pages/Home/Chef/Chef';
import Terms from '../pages/Login/Terms/Terms';
import Register from '../pages/Login/Register/Register';
import Login from '../pages/Login/Login/Login';
import ChefRecipe from '../pages/ChefRecipe/ChefRecipe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/home',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Chef></Chef>
            }
        ]
    },
    {
        path: 'chef-recipe',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <ChefRecipe></ChefRecipe>
            }
        ]
    },
]);

export default router;