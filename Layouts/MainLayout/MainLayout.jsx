import React from 'react';
import Navbar from '../../Pages/Header/Navbar';
import Footer from '../../Pages/Footer/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../../Pages/other-pages/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <ScrollToTop/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;