import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className=''>
            <div className=' sticky top-2 z-40'>
                <NavBar></NavBar>
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;