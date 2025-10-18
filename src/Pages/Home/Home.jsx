import React from 'react';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

const Home = () => {
    return (
        <>
            {/* Mobile & Tablet Only */}
            <MobileHome />

            {/* Desktop & Larger Only */}
            <DesktopHome />
        </>
    );
};

export default Home;
