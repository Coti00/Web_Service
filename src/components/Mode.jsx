import styled,{ThemeProvider} from "styled-components";
import { LuSunMedium } from "react-icons/lu";
import { AiOutlineMoon } from "react-icons/ai";

const ModeWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const Sun = styled(LuSunMedium)`
    color: white;
    width: 30px;
    height: 30px;
    margin: 20px 20px 0 0;
    padding: 0;
    &:hover{
        cursor: pointer;
    }
`
const Moon = styled(AiOutlineMoon)`
    width: 30px;
    height: 30px;
    margin: 20px 20px 0 0;
    padding: 0;
    &:hover{
        cursor: pointer;
    }
`

const Mode = ({isDarkMode, themeClick}) => {
    return(
        <ModeWrapper onClick = {themeClick}>
            {isDarkMode ? <Sun/>:<Moon/>}
        </ModeWrapper>
    );
};

export default Mode;