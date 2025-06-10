import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar';

const AuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;