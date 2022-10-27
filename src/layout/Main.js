import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <Outlet className='bg-white'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;