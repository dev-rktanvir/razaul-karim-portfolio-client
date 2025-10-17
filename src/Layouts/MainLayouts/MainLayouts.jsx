import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col items-center relative overflow-y-scroll'>

            <footer className='top-[30%] right-0 fixed mr-3'>
                <Footer></Footer>
            </footer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;