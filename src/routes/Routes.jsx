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
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Blog from '../pages/Blog/Blog';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/home',
        element: <Main></Main>
    },
    {
        path: 'chef',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
]);

export default router;