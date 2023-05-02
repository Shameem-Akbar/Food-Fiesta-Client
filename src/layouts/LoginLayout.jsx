import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <h2>Login</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;