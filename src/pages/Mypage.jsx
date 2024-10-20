import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu.jsx';
import avatar from '../img/test.png'

const Container = styled.div`
    width: auto;
    height: auto;
    margin: 0 200px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`
const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0;
    padding: 0;
    margin: 20px 20px;
`

const Quit = styled.p`
    font-size:bold 13px 'arial';
    color: red;
`




const Mypage = () => {
    return(
        <>
            <Menu/>
            <Container>
                <Avatar src={avatar}/>
                <Quit>회원탈퇴</Quit>
            </Container>
        </>
    );
};

export default Mypage;