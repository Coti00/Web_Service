import React,{useState} from "react";
import Menu from '../components/Menu.jsx';
import styled from "styled-components";

const Container = styled.div`
    margin: 0 170px;
    padding: 0;
`

const Title = styled.p`
    text-align: center;
    font: bold 50px 'arial';
    color: #e13955;
`

const MainWrapper = styled.div`
    height: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    margin: 0 200px;
    padding: 0;
    border-radius: 5px;
`

const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    border-bottom: 0.5px solid black;
`

const MenuName = styled.li`
    list-style: none;
    font: bold 20px 'arial';
    margin: 10px 0;
    padding: 0;
    border-bottom: 2px solid ${({ isSelected }) => (isSelected ? '#e13955' : 'transparent')}; 
    &:hover{
        border-bottom: 2px solid #e13955;
    }
`

const ContentWrapper = styled.div`

`

const Rankingpage = () => {
    const [selectedMenu, setSelectedMenu] = useState(null); 

    const handleClick = (index) => {
        setSelectedMenu(index); 
    }

    return(
        <>
            <Menu/>
            <Container>
                <Title>테마별 랭킹</Title>
                <MainWrapper>
                    <MenuWrapper>
                        <MenuName isSelected = {selectedMenu === 0} onClick={() => handleClick(0)}>한 식</MenuName>
                        <MenuName isSelected = {selectedMenu === 1}  onClick={() => handleClick(1)}>중 식</MenuName>
                        <MenuName isSelected = {selectedMenu === 2}  onClick={() => handleClick(2)}>양 식</MenuName>
                        <MenuName isSelected = {selectedMenu === 3}  onClick={() => handleClick(3)}>패스트푸드</MenuName>
                        <MenuName isSelected = {selectedMenu === 4}  onClick={() => handleClick(4)}>일 식</MenuName>
                    </MenuWrapper>
                    <ContentWrapper>
                        {selectedMenu === 0 ? <p>한식</p> : null}
                        {selectedMenu === 1 ? <p>중식</p> : null}
                        {selectedMenu === 2 ? <p>양식</p> : null}
                        {selectedMenu === 3 ? <p>패스트푸드</p> : null}
                        {selectedMenu === 4? <p>일식</p> : null}
                    </ContentWrapper>
                </MainWrapper>
            </Container>
        </>
    );
};

export default Rankingpage;