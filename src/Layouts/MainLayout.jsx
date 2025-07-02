import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-white dark:bg-black pt-14 lg:pt-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;