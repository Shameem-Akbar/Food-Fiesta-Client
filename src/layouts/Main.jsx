import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Home from '../pages/Home/Home/Home';
import Chef from '../pages/Home/Chef/Chef';
import Footer from '../pages/shared/Footer/Footer';
import banner from '../assets/banner.jpg'
import Banner from '../pages/Home/Banner/Banner';

const Main = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', height: "100vh" }}>
            <div>
                <NavigationBar></NavigationBar>
                <Banner></Banner>
            </div>
            <Home></Home>
            <Chef></Chef>
            <Footer></Footer>
        </div>
    );
};

export default Main;