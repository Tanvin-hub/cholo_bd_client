import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Home from "../components/Shared/Home/home"


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Outlet/>
        </div>
    );
};

export default Main;