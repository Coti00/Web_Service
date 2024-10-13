import styled from "styled-components";
import img from '../img/gallery.png';
import { FaCrown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const Crown = styled(FaCrown)`
    margin: 0;
    padding: 0;
    margin-right: 5px;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;  /* 가운데 정렬 */
    gap: 20px;  /* 요소 간 여백 */
    width: 90%;  /* 너비 제한 */
    margin: 0 auto;  /* 가운데 정렬을 위해 자동 마진 */
    padding: 0;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    width: 280px;
    height: 200px;
    border-radius: 15px;
    background-color: white;
`;


const Img = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: auto;
`
const Content = styled.p`
    font: bold 20px 'arial';
    height: 30px;
    margin: 0;
    padding: 0;
    margin-top: 10px;
`
const SubContent =styled.p`
    font: 500 13px 'arial';
    margin: 0;
    padding: 0;
`

const Down = styled(FaCaretDown)`
    color: black;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    margin-top: 20px;
`

const Ranking = () => {
    return(
        <Wrapper>
            <TitleWrapper>
                <Crown/>
                <Title>맛집 랭킹 Top3</Title>
            </TitleWrapper>
            <Container>
                <ContentWrapper>
                    <Img src = {img}/>
                    <Content>TEST</Content>
                    <SubContent>간단한 소개</SubContent>
                </ContentWrapper>
                <ContentWrapper>
                    <Img src = {img}/>
                    <Content>TEST</Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Img src = {img}/>
                    <Content>TEST</Content>
                </ContentWrapper>
            </Container>
            <Down/>
        </Wrapper>

    );
};

export default Ranking;