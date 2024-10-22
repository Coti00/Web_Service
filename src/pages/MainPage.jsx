import React from "react";
import Menu from "../components/Menu";
import Ranking from "../components/Ranking";
import KaKaoMap from "../components/KaKaoMap";


const MainPage = () => {
    return(
        <>
            <Menu/>
            <KaKaoMap/>
            <Ranking></Ranking>
        </>
    );
};

export default MainPage;