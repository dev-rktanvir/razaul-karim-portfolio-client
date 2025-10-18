import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <div className="relative">
            {/* Mobile: Top & Center Aligned */}
            <div className="lg:hidden px-4 pt-4 flex flex-col items-center">
                <Navbar></Navbar>
            </div>

            {/* Desktop: Right Fixed */}
            <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-50">
                <Navbar></Navbar>
            </div>

            {/* Page Content */}
            <div className="min-h-screen px-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;
