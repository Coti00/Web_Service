import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu.jsx';
import { GiKnifeFork } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import img from '../img/test.png';

const Container = styled.div`
    margin: 0 200px;
    padding: 0;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const Title = styled.p`
    margin: 0;
    padding: 0;
    font: bold 40px 'arial';
`;

const TitleIcon = styled(GiKnifeFork)`
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    padding-bottom: 5px;
    margin-right: 10px;
    color: gray;
`;

const SelectWrapper = styled.div`
    width: 130px;
    height: 30px;
    display: flex;
    border: 0.5px solid black;
    border-radius: 15px;
    margin: 50px 200px 0 200px;
    padding: 0;
    justify-content: center;
    position: relative;
    z-index: 10;
    margin-bottom: 40px;
`;

const Select = styled.p`
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 30px;
`;

const Down = styled(FaCaretDown)`
    margin: 0;
    padding: 0;
    padding-top: 7px;
    margin-left: 10px;
`;

const OptionWrapper = styled.div`
    width: 130px;
    padding: 0;
    border: 0.5px solid black;
    border-radius: 15px;
    position: absolute;
    top: -1px;
    z-index: 100; 
    background-color: white;
`;

const Option = styled.p`
    list-style: none;
    text-align: center;
    margin: 10px 10px;
    padding: 0%;
    border-bottom: 1px solid transparent;
    &:hover{
        cursor: pointer;
        color: #e13955;
        border-bottom: 1px solid #e13955;
    }
`;

const ContentWrapper = styled.div`
    height: 230px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: calc(80%);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    &:hover{
        box-shadow: 0px 4px 8px #e9a6b1, 0px 6px 20px #ea8e9d;
    }
`;

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;

const Name = styled.div`
    width: calc(50%);
    margin: 0;
    padding: 0 20px;
    font: bold 18px 'arial';
    margin-top: 5px;
`;

const Theme = styled.p`
    margin: 10px 0;
    padding: 0 20px;
    font: 500 14px 'arial';
`;

const Like = styled.p`
    margin: 0;
    padding: 0 20px;
    font: 500 14px 'arial';
    margin-bottom: 5px;
`;

const AppendWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20%);
    &:hover{
        background-color: #d5d3d3;
        color: white;
    }
`

const Plus = styled(FiPlusCircle)`
    margin: 0;
    padding: 0;
    width: 50px;
    height: auto;
    margin-top: 80px;
`
const AppendContent = styled.p`
    font: bold 13px 'arial';
    padding: 0;
    margin: 0;
    margin-top: 10px;
`

const Mybest = () => {
    const [select, setSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState("전체");

    const selectClick = () => {
        setSelect(!select); 
    };

    const optionClick = (option) => {
        setSelectedOption(option); // 선택한 Option의 값을 저장
        setSelect(false); // OptionWrapper 숨기기
    };

    // 샘플 데이터 (theme 값을 포함)
    // 백엔드에서 가져오면 자동으로 등록됨
    const contentData = [
        { name: "기사식당", theme: "한식", like: 3, img: img },
        { name: "중식당", theme: "중식", like: 1, img: img },
        { name: "일식집", theme: "일식", like: 5, img: img },
        { name: "한식당", theme: "한식", like: 1, img: img },
    ];

    // 선택한 옵션에 따라 필터링된 데이터를 반환 (전체 선택 시 모두 표시)
    const filteredContent = contentData.filter(content => 
        selectedOption === "전체" || content.theme === selectedOption
    );

    return (
        <>
            <Menu />
            <Container>
                <TitleWrapper>
                    <TitleIcon /><Title>나의 맛집</Title>
                </TitleWrapper>
                <SelectWrapper onClick={selectClick}>
                    <Select>{selectedOption}</Select><Down />
                    {select && (
                        <OptionWrapper>
                            <Option onClick={() => optionClick("전체")}>전체</Option>
                            <Option onClick={() => optionClick("한식")}>한식</Option>
                            <Option onClick={() => optionClick("중식")}>중식</Option>
                            <Option onClick={() => optionClick("일식")}>일식</Option>
                            <Option onClick={() => optionClick("패스트푸드")}>패스트푸드</Option>
                            <Option onClick={() => optionClick("좋아요순")}>좋아요순</Option>
                        </OptionWrapper>
                    )}
                </SelectWrapper>
                <ContentWrapper>
                    {filteredContent.map((content, index) => (
                        <Content key={index}>
                            <Img src={content.img} />
                            <Name>{content.name}</Name>
                            <Theme>{content.theme}</Theme>
                            <Like>좋아요 : {content.like}</Like>
                        </Content>
                    ))}
                    <AppendWrapper>
                        <Plus/>
                        <AppendContent>추가하기</AppendContent>
                    </AppendWrapper>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default Mybest;
