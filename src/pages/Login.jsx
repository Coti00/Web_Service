import React,{useRef, useEffect, useState} from "react";
import styled,{ThemeProvider} from "styled-components";
import { lightTheme,darkTheme } from "../theme/theme";
import { useNavigate } from "react-router-dom";
import Mode from "../components/Mode";

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginForm = styled.form`
    width: 700px;
    height: 500px;
    padding: 0;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 15px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
`

const Title = styled.p`
    text-align: center;
    font: bold 40px 'arial';
    margin: 50px auto;
    padding: 0;
    color: black;
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
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    margin-bottom:30px;
`

const Input =styled.input`
    border: none;
    width: 400px;
    height: 50px;
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
    margin: 0px;
    padding: 0px;
    margin-top: 50px;
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
    background: ${(props) => (props.isActive ? 'gray' : '#363535')};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    &:hover{
        color: ${(props) => (props.isActive ? "white" : "#c5c1c1")};
        cursor: ${(props) => (props.isActive ? "not-allowed" : "pointer")};
    }
`

const JoinButton = styled.p`
    color: black;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-top: 30px;
    font: bold 15px 'arial';
    &:hover{
        color: gray;
        cursor: pointer;
    }
`

const Login = ({isDarkMode, themeClick}) => {
    const Firstfoucs = useRef(null);
    const Joinnavigate = useNavigate();
    const Loginnavigate = useNavigate();
    const [id, setid] = useState("");
    const [pass, setpass] = useState("");

    useEffect(() => {
        if(Firstfoucs.current){
            Firstfoucs.current.focus();
        }
    },[]);

    const onClick = () =>{
        Joinnavigate('/join');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginactive){
            alert("로그인 되었습니다!");
            Loginnavigate('/main');
        }
    };
    
    const loginactive = id && pass;

    return(
        <LoginWrapper theme = {isDarkMode ? darkTheme : lightTheme}>
            <Mode themeClick={themeClick} isDarkMode={isDarkMode}/>
            <LoginForm onSubmit={handleSubmit}>
                <Title>로그인</Title>
                <NameWrapper>
                    <Name>아이디</Name>
                </NameWrapper>
                <InputWrapper>  
                    <Input type="text" placeholder="아이디를 입력해주세요" ref={Firstfoucs} value={id} onChange={(e) => setid(e.target.value)}/>
                </InputWrapper>
                <NameWrapper>
                    <Name>비밀번호</Name>
                </NameWrapper>
                <InputWrapper>
                    <Input type="password" placeholder="비밀번호를 입력해주세요" value={pass} onChange={(e) => setpass(e.target.value)}/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button type="submit" isActive = {!loginactive}>로그인</Button>
                </ButtonWrapper>
                <JoinButton onClick={onClick}>회원가입</JoinButton>
            </LoginForm>
        </LoginWrapper>
    );
};

export default Login;