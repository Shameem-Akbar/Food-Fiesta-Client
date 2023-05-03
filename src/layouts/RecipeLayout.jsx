import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import banner from '../assets/banner.jpg'

const RecipeLayout = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', height: "12vh" }}>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default RecipeLayout;