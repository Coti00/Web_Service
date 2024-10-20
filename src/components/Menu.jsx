import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import avatar from '../img/test.png'

const MenuWrapper = styled.div`
    height: 40px; /* 부모 요소 높이에 맞춤 */
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;

const Logo = styled.div`
    margin: 0;
    padding: 0;
    margin-left: 20px;
    font: bold 20px 'arial';
    line-height: 40px;
    &:hover{
        color: gray;
        cursor: pointer;
    }
`

const MenuIcon = styled.div`
    list-style: none;
    color: black;
    margin: auto 20px;
    padding: 0;
`;

const Hamburger = styled(GiHamburgerMenu)`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    &:hover {
        cursor: pointer;
        color: gray;
    }
`;

const Menulist = styled.div`
    width: 230px;
    height: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    border-top: none;
    margin: 0;
    padding: 0;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
`

const Menuitem = styled.div`
    font: 400 15px 'arial';
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
        color: gray;
    }
`

const Logout = styled.div`
    font: bold 12px 'arial';
    color: red;
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 20px auto;
    &:hover{
        cursor: pointer;
        color: gray;
    }
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0;
    padding: 0;
    margin: 20px 20px;
`

const Menu = () => {
    const [menustate, setmenustate] = useState(false);
    const mainpage= useNavigate();
    const mypage = useNavigate();
    const mybest = useNavigate();
    const ranking = useNavigate();
    const logout = useNavigate();

    const gomain = () => {
        mainpage('/main')
    }

    const onClick = () =>{
        setmenustate(!menustate);
        console.log('change');
    }

    const gomypage = () =>{
        mypage('/mypage');
    }

    const gomybest = () =>{
        mybest('/mybest');
    }

    const goranking = () =>{
        ranking('/ranking');
    }

    const gologout = () => {
        logout('/')
    }

    return (
        <>
            <MenuWrapper>
                <Logo onClick={gomain}>전맛알</Logo>
                <MenuIcon onClick={onClick}><Hamburger /></MenuIcon>
            </MenuWrapper>
            {menustate ? <Menulist>
                <Avatar src={avatar}/>
                <Menuitem onClick={gomypage}>마이페이지</Menuitem>
                <Menuitem onClick={gomybest}>나의 맛집</Menuitem>
                <Menuitem onClick={goranking}>맛집 랭킹</Menuitem>
                <Logout onClick={gologout}>로그아웃</Logout>
            </Menulist>: null}
        </>
    );
};

export default Menu;
