import React, { useState } from "react";
import Menu from '../components/Menu.jsx';
import styled from "styled-components";
import img from '../img/food.png';
import { AiFillLike } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Container = styled.div`
    margin: 0 400px;
    padding: 0;
    display: flex;
    flex-direction: column;
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
    margin: 20px 0;
    padding: 0;
    border-radius: 5px;
`

const Img = styled.img`
    object-fit: cover;
    width: 300px;
    height: auto;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`

const ContentWrapper = styled.div`
    margin: 0;
    padding: 0;
`;

const StoreName = styled.p`
    margin: 20px 30px 0 30px;
    padding: 0;
    font: bold 40px 'arial';
    color: #e13955;
    writing-mode: horizontal-tb;
`;

const MainMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 30px;
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Button = styled.button`
    background-color: #e13955;
    color: white;
    border: none;
    margin: 0 10px;
    font: bold 14px 'arial';
    border-radius: 5px;
    height: 30px;
    width: 60px;
    line-height: 30px;
    cursor: pointer;
    &:hover {
        background-color: gray;
    }
    &:disabled {
        background-color: lightgray;
        cursor: not-allowed;
    }
`;

const Rankingpage = () => {
    // 임의의 딕셔너리 데이터를 생성
    const restaurantData = [
        { name: "수라온", menu: "한식", address: "전주시 덕진구 백제대로 528", likes: 100 },
        { name: "청진식당", menu: "일식", address: "서울시 강남구 테헤란로 123", likes: 85 },
        { name: "마포갈비", menu: "고기구이", address: "서울시 마포구 월드컵로 456", likes: 95 },
        { name: "왕냉면", menu: "냉면", address: "부산시 해운대구 해운대로 789", likes: 120 },
        { name: "청국장촌", menu: "한식", address: "대구시 북구 침산로 101", likes: 110 },
        { name: "돌솥비빔밥", menu: "비빔밥", address: "광주시 동구 대인로 101", likes: 70 },
        { name: "갈비탕 명가", menu: "갈비탕", address: "인천시 남동구 백범로 256", likes: 80 },
        { name: "소문난 순대국", menu: "순대국", address: "대전시 서구 탄방로 18", likes: 65 },
        { name: "해물파전 전문점", menu: "해물파전", address: "울산시 남구 봉월로 91", likes: 90 },
        { name: "칼국수집", menu: "칼국수", address: "전라북도 익산시 동서로 118", likes: 78 }
    ];

    // 페이지네이션 상태 관리
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // 현재 페이지에 맞는 데이터 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurantData.slice(indexOfFirstItem, indexOfLastItem);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(restaurantData.length / itemsPerPage);

    // 페이지 이동 함수
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <Menu />
            <Container>
                <Title>맛집 랭킹</Title>
                {currentItems.map((restaurant, index) => (
                    <MainWrapper key={index}>
                        <Img src={img} />
                        <ContentWrapper>
                            <StoreName>{restaurant.name}</StoreName>
                            <MainMenuWrapper>
                                <MainMenu>카테고리: </MainMenu>
                                <MainMenuName>{restaurant.menu}</MainMenuName>
                            </MainMenuWrapper>
                            <AddressWrapper>
                                <Address>주소: </Address>
                                <AddressName>{restaurant.address}</AddressName>
                            </AddressWrapper>
                            <LikeWrapper>
                                <Like />
                                <LikeCount>{restaurant.likes}</LikeCount>
                            </LikeWrapper>
                        </ContentWrapper>
                    </MainWrapper>
                ))}
                <ButtonWrapper>
                    <Button onClick={goToPrevPage} disabled={currentPage === 1}>
                        이전
                    </Button>
                    <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
                        다음
                    </Button>
                </ButtonWrapper>
            </Container>
        </>
    );
};

export default Rankingpage;
