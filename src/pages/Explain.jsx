import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import Menu from "../components/Menu";
import img from "../img/food.png";
import { AiFillLike } from "react-icons/ai";

const Container = styled.div`
    margin: 70px 300px 0 300px;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: auto;
`;

const InfoWrapper = styled.div`
    margin: 0;
    padding: 0;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 40px;
`;

const Img = styled.img`
    object-fit: cover;
    width: 450px;
    height: auto;
    border-radius: 5px;
`;

const ContentWrapper = styled.div`
    margin: 0;
    padding: 0 20px;
    border: 1px solid black;
    border-radius: 5px;
`;

const StoreName = styled.p`
    margin: 0 30px;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 30px;
    font: bold 40px 'arial';
    color: #e13955;
    writing-mode: horizontal-tb;
`;

const MainMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 30px;
    padding: 0;
    writing-mode: horizontal-tb;
`;

const MainMenu = styled.p`
    margin: 0;
    padding: 0;   
    font: 500 15px 'arial';
    writing-mode: horizontal-tb;
`;

const MainMenuName = styled.p`
    font: 400 15px 'arial';
    margin: 0;
    margin-left: 5px;
    writing-mode: horizontal-tb;
`;

const AddressWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 30px;
    padding: 0;
    writing-mode: horizontal-tb;
`;

const Address = styled.p`
    margin: 0;
    padding: 0;   
    font: 500 15px 'arial';
    writing-mode: horizontal-tb;
`;

const AddressName = styled.p`
    font: 400 15px 'arial';
    margin: 0;
    margin-left: 5px;
    writing-mode: horizontal-tb;
`;

const LikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 30px;
    padding: 0;
    align-items: center;
`;

const Like = styled(AiFillLike)`
    margin: 0;
    padding: 0;
    margin-right: 5px;
    color: #e13955;
    cursor: pointer;
`;

const LikeCount = styled.div`
    font: bold 13px 'arial';
    margin: 0;
`;

const Enroll = styled.button`
    background: #e13955;
    border-radius: 5px;
    border: none;
    color: white;
    font: bold 20px 'arial';
    width: 300px;
    height: 50px;
    margin: 0;
    margin-top: 20px;
    margin-left: 34px;
    &:hover{
        background-color: gray;
        cursor: pointer;
    }
`;

const ChattingWrapper = styled.div`
    margin: 40px 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Chatting = styled.input`
    margin: 0;
    padding: 0;
    height: 30px;
    border-radius: 5px;
    margin-right: 5px;
    width: calc(80%);
    padding-left: 20px;
    border: 1px solid black;
    &:hover{
        outline: none; 
    }
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    width: 60px;
    height: 32px;
    background: #e13955;
    border-radius: 5px;
    border: none;
    color: white;
    font: bold 15px 'arial';
    &:hover{
        background-color: gray;
        cursor: pointer;
    }
`;

const ChattingList = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 400px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 40px;
    overflow-y: auto;
`;

const Chat = styled.p`
    margin: 10px 30px;
    padding: 0;
`;

const Explain = () => {
    const [chat, setChat] = useState("");
    const [chatList, setChatList] = useState([]); // 댓글 목록을 관리하는 상태
    const [likeCount, setLikeCount] = useState(0); // Like 카운트를 관리하는 상태

    // 댓글 등록 기능
    const handleAddChat = () => {
        if (chat.trim() !== "") {
            setChatList([...chatList, chat]); // 새로운 댓글 추가
            setChat(""); // 입력 필드 초기화
        }
    };

    // Like 버튼 클릭 시 카운트 증가
    const handleLikeClick = () => {
        setLikeCount(likeCount + 1); // likeCount 증가
    };

    return (
        <>
            <Menu/>
            <Container>
                <InfoWrapper>
                    <Img src={img} />
                    <ContentWrapper>
                        <StoreName>수라온</StoreName>
                        <MainMenuWrapper><MainMenu>카테고리 : </MainMenu><MainMenuName> 한식</MainMenuName></MainMenuWrapper>
                        <AddressWrapper><Address>주소 :</Address><AddressName>전라북도 전주시 덕진구 백제대로 528</AddressName></AddressWrapper>
                        <LikeWrapper onClick={handleLikeClick}>
                            <Like /><LikeCount>{likeCount}</LikeCount> {/* 클릭 시 카운트 증가 */}
                        </LikeWrapper>
                        <Enroll>맛집 등록</Enroll>
                    </ContentWrapper>
                </InfoWrapper>
                <Map center={{ lat: 35.8467404, lng: 127.1294235 }} style={{ width: "912px", height: "400px", borderRadius: '5px' }}>
                    <MapMarker position={{ lat: 35.8467404, lng: 127.1294235 }}>
                    </MapMarker>
                </Map>
                <ChattingWrapper>
                    <Chatting placeholder="댓글을 입력하세요" type="text" value={chat} onChange={(e) => setChat(e.target.value)} />
                    <Button onClick={handleAddChat}>등 록</Button>
                </ChattingWrapper>
                <ChattingList>
                    {chatList.map((chatItem, index) => (
                        <Chat key={index}>{chatItem}</Chat> // 댓글 목록 출력
                    ))}
                </ChattingList>
            </Container>
        </>
    );
};

export default Explain;
