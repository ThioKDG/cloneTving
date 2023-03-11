import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function MainLayout(props) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />   
        </>
    );
}

export default MainLayout;