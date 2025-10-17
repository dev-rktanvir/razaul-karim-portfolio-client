import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='h-screen flex items-center relative'>
            <Outlet></Outlet>
            <footer className='absolute top-auto right-0 mr-3'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayouts;