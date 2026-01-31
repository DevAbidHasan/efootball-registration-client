import React from 'react';
import Navbar from '../../Pages/Header/Navbar';
import Footer from '../../Pages/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;