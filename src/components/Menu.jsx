// 메뉴바 왼쪽, 오른쪽 선택할 수 있게 하자 
// 버튼 클릭하면 useState값을 바꾸어 값에 따라 바꾸기 {choice ? left : right}이런 형식으로

import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";

const MenuContainer = styled.div`
    height: 100vh; /* 뷰포트 전체 높이 */
    border-right: 1px solid black;
`;

const MenuWrapper = styled.ul`
    height: 100%; /* 부모 요소 높이에 맞춤 */
    width: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const Menulist = styled.li`
    list-style: none;
    color: black;
    margin: 20px 0;
    padding: 0;
`;

const Hamburger = styled(GiHamburgerMenu)`
    padding: 10px;
    border-radius: 50%;
    &:hover {
        background: gray;
    }
`;

const Menu = () => {
    return (
        <MenuContainer>
            <MenuWrapper>
                <Menulist><Hamburger /></Menulist>
            </MenuWrapper>
        </MenuContainer>
    );
};

export default Menu;
