import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
import Join from '../pages/Join';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from '../theme/theme';

const AppRoutes = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const themeClick = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return(
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Routes>
                <Route path='/' element = {<Login isDarkMode={isDarkMode} themeClick = {themeClick}/>}/>
                <Route path='/main' element={<MainPage isDarkMode={isDarkMode} themeClick = {themeClick}/>}/>
                <Route path='/join' element={<Join isDarkMode={isDarkMode} themeClick = {themeClick}/>}/>
            </Routes>
        </ThemeProvider>
    );
};

export default AppRoutes;