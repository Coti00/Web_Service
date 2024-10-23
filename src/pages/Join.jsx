import React,{useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Mode from "../components/Mode";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";

const JoinContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`

const JoinForm = styled.form`
    width: 700px;
    height: auto;
    margin: 50px auto auto auto;
    padding: 0;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    background: white;
`

const Title = styled.p`
    font: bold 35px 'arial';
    text-align: center;
    margin: 30px auto;
    padding: 0;
`

const NameWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`
const Name = styled.p`
    margin: 0;
    padding: 0;
    width: 400px;
    padding-left: 10px;
    font: bold 14px 'arial';
`

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`


const Input = styled.input`
    border: none;
    width: 400px;
    height: 40px;
    border-radius: 15px;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    font: 500 15px 'arial';
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.15), inset 3px 3px 15px rgba(0, 0, 0, 0.15);
    &:focus {
    border: none; 
    outline: none; 
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0 auto;
    padding: 0px;
`

const Button = styled.button`  
    padding: 0;
    margin: 0;
    width: 150px;
    height: 40px;
    border-radius: 15px;
    border: none;
    font: bold 17px 'arial';
    color: white;
    background: ${(props) => (props.disabled ? 'gray' : '#363535')};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    &:hover{
        color: ${(props) => (props.disabled ? "white" : "#c5c1c1")};
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    }
`

const LoginButton = styled.p`
    color: black;
    text-align: center;
    margin: 30px 0;
    padding: 0;
    font: bold 15px 'arial';
    &:hover{
        color: gray;
        cursor: pointer;
    }
`
const CertiButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    width: 700px;
`

const CertiButton = styled.button`
    height: 40px;
    margin: 0;
    padding: 0;
    width: 100px;
    border-radius: 15px;
    color: white;
    background: #363535;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.15), inset 3px 3px 15px rgba(0, 0, 0, 0.15);
    border: none;
    font: bold 15px 'arial';
    &:hover{
        background: #979595;
    }
`

const CertiInput = styled.input`
    border: none;
    width: 290px;
    height: 40px;
    border-radius: 15px;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    font: 500 15px 'arial';
    margin-right: 10px;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.15), inset 3px 3px 15px rgba(0, 0, 0, 0.15);
    &:focus {
    border: none; 
    outline: none; 
    }
`

const Join = ({isDarkMode, themeClick}) =>{
    const Firstfoucs = useRef(null);
    const Loginnavigate = useNavigate();
    const [pass, setpass] = useState("");
    const [repass, setrepass] = useState("");
    const [email,setemail] = useState("");
    const [nickname, setnickname] = useState("");
    const [certi,setcerti] = useState("");
    const MainNavigate = useNavigate();

    useEffect(() => {
        if(Firstfoucs.current){
            Firstfoucs.current.focus();
        }
    },[]);

    const LoginClick = () =>{
        Loginnavigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (buttonactive){
            alert('회원가입 되었습니다!');
            MainNavigate('/');
        }
    }

    const passconfirm = (pass && repass) && (pass === repass);
    const buttonactive = email && nickname && passconfirm && certi; 
// 인증 버튼 눌렀을때 이증 성공시 주는 값 추가하기

    return(
        <JoinContainer theme={isDarkMode ? darkTheme : lightTheme}>
            <Mode themeClick={themeClick} isDarkMode={isDarkMode}/>
            <JoinForm onSubmit = {handleSubmit}>
                <Title>회원가입</Title>
                <NameWrapper>
                    <Name>이메일</Name>
                </NameWrapper>
                <CertiButtonWrapper>
                    <CertiInput placeholder="이메일을 입력해주세요" type="email" value={email} onChange = {(e) => setemail(e.target.value)}/><CertiButton>인 증</CertiButton>
                </CertiButtonWrapper>
                <CertiButtonWrapper>
                    <CertiInput placeholder="인증번호를 입력해주세요" type="text" value={certi} onChange={(e) => setcerti(e.target.value)}/><CertiButton>확 인</CertiButton>
                </CertiButtonWrapper>
                <NameWrapper>
                    <Name>닉네임</Name>
                </NameWrapper>
                <InputWrapper>
                    <Input placeholder="닉네임" type="text" value={nickname} onChange={(e) => setnickname(e.target.value)}></Input>
                </InputWrapper>
                <NameWrapper>
                    <Name>비밀번호</Name>
                </NameWrapper>
                <InputWrapper>
                    <Input placeholder="비밀번호 입력" type="password" value={pass} onChange={(e) => setpass(e.target.value)}></Input>
                </InputWrapper>
                <NameWrapper>
                    <Name>비밀번호 확인</Name>
                </NameWrapper>
                <InputWrapper>
                    <Input placeholder="비밀번호 재입력" type="password" value={repass} onChange={(e) => setrepass(e.target.value)}></Input>
                </InputWrapper>
                <ButtonWrapper>
                    <Button type="submit" disabled = {!buttonactive}>회원가입</Button>
                </ButtonWrapper>
                <LoginButton onClick={LoginClick}>로그인</LoginButton>
            </JoinForm>
        </JoinContainer>
    );
};

export default Join;