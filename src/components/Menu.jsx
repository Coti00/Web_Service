import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { GrLogout } from "react-icons/gr";

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

const Menulist = styled.div`
    width: calc(30%);
    height: auto;
    border-top: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`

const Menuitem = styled.div`
    font: bold 13px 'arial';
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    border-bottom: 2px solid transparent;
    &:hover{
        cursor: pointer;
        color: #e13955;
        border-bottom: 2px solid #e13955;
    }
`

const LogoutWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    &:hover{
        cursor: pointer;
        color: #e13955;
    }
`

const LogoutIcon = styled(GrLogout)`
    margin: 0;
    padding: 0;
`

const Logout= styled.p`
    font: bold 11px 'arial';
    margin: 0;
    padding: 0;
`


const Menu = () => {
    const mainpage= useNavigate();
    const mypage = useNavigate();
    const mybest = useNavigate();
    const ranking = useNavigate();
    const logout = useNavigate();

    const gomain = () => {
        mainpage('/main')
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
                <Menulist>
                    <Menuitem onClick={gomypage}>마이페이지</Menuitem>
                    <Menuitem onClick={gomybest}>나의 맛집</Menuitem>
                    <Menuitem onClick={goranking}>맛집 랭킹</Menuitem>
                    <LogoutWrapper onClick={gologout}><LogoutIcon/><Logout>로그아웃</Logout></LogoutWrapper>
                </Menulist>
            </MenuWrapper>
        </>
    );
};

export default Menu;
