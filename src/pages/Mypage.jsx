import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu.jsx';
import avatar from '../img/test.png'
import { FaAngleRight } from "react-icons/fa6";

const Container = styled.div`
    width: auto;
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 300px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
`

const Info = styled.div`
    width: calc(80%);
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid gray;
    justify-content: center;
    margin-top: 40px;
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    padding: 0;
    margin: 20px 20px;
    margin-bottom: 50px;
`

const InfoWrapper = styled.div`
    margin: 20px 50px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
`

const Welcome = styled.p`
    font: bold 30px 'arial';
`

const Quit = styled.p`
    font: 800 14px 'arial';
    color: red;
`

const Activity = styled.div`
    width: calc(80%);
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    margin-top: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid gray;
    justify-content: center;
`

const ActivityContent = styled.div`
    margin: 0 50px;
    padding: 0;
`

const ActivityTitle = styled.p`
    margin: 0;
    padding: 0;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    font: bold 20px 'arial';
`

const ActivityCount = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font: bold 20px 'arial';
    margin-top: 10px;
`

const SubContainer = styled.div`
    width: calc(80%);
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
`

const SubWrapper = styled.div`
    align-items: center;
    width: calc(80%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    margin-top: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    &:hover{
        cursor: pointer;
        color: gray;
        border-bottom: 1px solid gray;
    }
`

const SubTitle = styled.p`
    margin: 0;
    padding: 0;
    margin-left: 30px;
    font: bold 14px 'arial';
`

const Right = styled(FaAngleRight)`
    margin: 0;
    padding: 0;
    margin-right: 30px;
    padding-top: 2px;
`

const Mypage = () => {
    return(
        <>
            <Menu/>
            <Container>
                <Info>
                    <Avatar src={avatar}/>
                    <InfoWrapper>
                        <Welcome>닉네임님 환영합니다.</Welcome>
                    </InfoWrapper>
                </Info>
                <Activity>
                    <ActivityContent>
                        <ActivityTitle>방문 횟수</ActivityTitle>
                        <ActivityCount>0</ActivityCount>
                    </ActivityContent>
                    <ActivityContent>
                        <ActivityTitle>나의 맛집</ActivityTitle>
                        <ActivityCount>0</ActivityCount>
                    </ActivityContent>
                </Activity>
                <SubContainer>
                    <SubWrapper>
                        <SubTitle>내가 등록한 맛집</SubTitle>
                        <Right/>
                    </SubWrapper>
                    <SubWrapper>
                        <SubTitle>내가 작성한 리뷰</SubTitle>
                        <Right/>
                    </SubWrapper>
                </SubContainer>
                <Quit>회원탈퇴</Quit>
            </Container>
        </>
    );
};

export default Mypage;