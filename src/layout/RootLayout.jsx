import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
    return (
        <div className='bg-[#f8fafcFF] p-0'>

            <NavBar></NavBar>

            <Outlet></Outlet>

            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;