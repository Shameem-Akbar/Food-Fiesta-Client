import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RecipeLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;