import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from '../theme/theme';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
import Join from '../pages/Join';
import Mypage from '../pages/Mypage';
import Mybest from '../pages/Mybest';
import Rankingpage from '../pages/Rankingpage';


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
                <Route path='mypage' element={<Mypage  isDarkMode={isDarkMode} themeClick = {themeClick}/>}/>
                <Route path='mybest' element={<Mybest  isDarkMode={isDarkMode} themeClick = {themeClick}/>}/>
                <Route path='ranking' element={<Rankingpage isDarkMode={isDarkMode} themeClick = {themeClick}/>}/>

            </Routes>
        </ThemeProvider>
    );
};

export default AppRoutes;