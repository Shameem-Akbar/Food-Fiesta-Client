import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Home from '../pages/Home/Home/Home';
import Chef from '../pages/Home/Chef/Chef';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Home></Home>
            <Chef></Chef>
            <Footer></Footer>
        </div>
    );
};

export default Main;