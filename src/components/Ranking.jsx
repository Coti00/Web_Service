import React,{useState} from "react";
import styled from "styled-components";
import img from '../img/gallery.png';
import { FaCrown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";


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
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Title = styled.p`
    font: bold 15px 'arial';
    margin: 0;
    padding: 0;
    margin-left: 5px;
    margin-bottom: 10px;
    color: #e13955;
`

const Crown = styled(FaCrown)`
    margin: 0;
    padding: 0;
    margin-right: 5px;
    margin-bottom: 10px;
    color: #f9e75b;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 0 auto;  /* 가운데 정렬을 위해 자동 마진 */
    padding: 0;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    width: 280px;
    height: auto;
    border-radius: 15px;
    background-color: white;
    @media screen and (max-width: 768px) {
        &:nth-child(2){
            margin: 0 10px;
        }
    }
`;


const Img = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: auto;
`
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
`
const Categories =styled.p`
    font: 500 13px 'arial';
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const Down = styled(FaCaretDown)`
    color: #e13955;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
`

const Up = styled(FaCaretUp)`
    color: #e13955;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
`

const P = styled.p`
    margin: 0;
    padding: 0;
    font: bold 13px 'arial';
    color: #e13955;
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    height: auto;
    &:hover{
        cursor: pointer;
        color: gray;
        p, svg{
            color: gray;
        }
    }
`

// Down을 누르면 Wrapper가 비활성되고 Up아이콘이 나타나도록 수정
// Ranking 위치를 어떻게 설정해야 하는지 고민하기
// 메뉴를 누르면 랭킹 없어지도록 해야함
const Ranking = () => {
    const [view, setview] = useState(true);

    const onClick = () =>{
        setview((prevstate) => !prevstate);
    };

    return(
        <Wrapper>
            {view?<><TitleWrapper>
                <Crown/>
                <Title>맛집 랭킹 Top3</Title>
            </TitleWrapper>
            <Container>
                <ContentWrapper>
                    <Img src = {img}/>
                    <Name>TEST</Name>
                    <Categories>간단한 소개</Categories>
                </ContentWrapper>
                <ContentWrapper>
                    <Img src = {img}/>
                    <Name>TEST</Name>
                    <Categories>간단한 소개</Categories>
                </ContentWrapper>
                <ContentWrapper>
                    <Img src = {img}/>
                    <Name>TEST</Name>
                    <Categories>간단한 소개</Categories>
                </ContentWrapper>
            </Container>
            </>:<></>}
            {view?<><ButtonWrapper onClick={onClick}><P>눌러서 감추기</P><Down/></ButtonWrapper></>:<><ButtonWrapper onClick={onClick}><P>랭킹 보기</P><Up/></ButtonWrapper></>}
        </Wrapper>
    );
};

export default Ranking;