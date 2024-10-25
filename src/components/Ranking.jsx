import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from '../img/food.png';
import { FaCrown, FaCaretDown, FaCaretUp } from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0px;
    right: 0;
    bottom: 10px;
    width: 90%;
    margin: 0;
    padding: 0;
    margin-left: 100px;
    z-index: 10;
    @media screen and (max-width: 768px) {
        margin-left: 0;
        width: 100%;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
    font: bold 15px 'arial';
    margin: 0;
    padding: 0;
    margin-left: 5px;
    margin-bottom: 10px;
    color: black;
`;

const Crown = styled(FaCrown)`
    margin: 0;
    padding: 0;
    margin-right: 5px;
    margin-bottom: 10px;
    color: #f9e75b;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 0;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    width: 280px;
    height: auto;
    border-radius: 5px;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        &:nth-child(2) {
            margin: 0 10px;
        }
    }
`;

const Img = styled.img`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 150px;
`;

const Name = styled.p`
    font: bold 17px 'arial';
    height: auto;
    margin: 5px 0;
    padding: 0;
    color: #e13955;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        height: auto;
    }
`;

const Categories = styled.p`
    font: 500 13px 'arial';
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Down = styled(FaCaretDown)`
    color: black;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
`;

const Up = styled(FaCaretUp)`
    color: black;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
`;

const P = styled.p`
    margin: 0;
    padding: 0;
    font: bold 13px 'arial';
    color: black;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    height: auto;
    &:hover {
        cursor: pointer;
        color: gray;
        p, svg {
            color: gray;
        }
    }
`;

const Ranking = () => {
    const [view, setview] = useState(true);
    const InfoNavigate = useNavigate();

    const onClick = () => {
        setview((prevstate) => !prevstate);
    };

    const InfoClick = () => {
        InfoNavigate('/explain');
    };

    // 3개의 맛집 데이터를 딕셔너리 형태로 작성
    const restaurantData = [
        { name: "수라온", category: "한식", imgSrc: img },
        { name: "청진식당", category: "일식", imgSrc: img },
        { name: "마포갈비", category: "고기구이", imgSrc: img },
    ];

    return (
        <Wrapper>
            {view ? (
                <>
                    <TitleWrapper>
                        <Crown />
                        <Title>맛집 랭킹 Top3</Title>
                    </TitleWrapper>
                    <Container>
                        {restaurantData.map((restaurant, index) => (
                            <ContentWrapper key={index} onClick={InfoClick}>
                                <Img src={restaurant.imgSrc} alt={restaurant.name} />
                                <Name>{restaurant.name}</Name>
                                <Categories>{restaurant.category}</Categories>
                            </ContentWrapper>
                        ))}
                    </Container>
                </>
            ) : (
                <></>
            )}
            {view ? (
                <ButtonWrapper onClick={onClick}>
                    <P>눌러서 감추기</P>
                    <Down />
                </ButtonWrapper>
            ) : (
                <ButtonWrapper onClick={onClick}>
                    <P>랭킹 보기</P>
                    <Up />
                </ButtonWrapper>
            )}
        </Wrapper>
    );
};

export default Ranking;
