import styled from "styled-components";
import Menu from "../components/Menu";
import Ranking from "../components/Ranking";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const MainPage = () => {
    return(
        <Container>
            <Menu/>
            <Ranking></Ranking>
        </Container>
    );
};

export default MainPage;