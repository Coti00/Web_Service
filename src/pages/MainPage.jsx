import React,{useEffect} from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Ranking from "../components/Ranking";

const MainPage = () => {

    return(
        <>
            <Menu/>
            <div id="map" style={{width:'500px' ,height:'400px'}}></div>
            <Ranking></Ranking>
        </>
    );
};

export default MainPage;