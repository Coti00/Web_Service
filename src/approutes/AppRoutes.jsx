import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/main' element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRoutes;