import React,{useRef, useEffect, useState} from "react";
import styled,{ThemeProvider} from "styled-components";
import { lightTheme,darkTheme } from "../theme/theme";
import { useNavigate } from "react-router-dom";
import Mode from "../components/Mode";
import backgroundimg from '../img/background.png';

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${backgroundimg}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginForm = styled.form`
    width: 450px;
    height: auto;
    padding: 0;
    margin: auto;
    border-radius: 5px;
    background: white;
    /* backdrop-filter: blur(10px); */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
`

const Title = styled.p`
    text-align: center;
    font: bold 40px 'arial';
    margin-inline: auto;
    margin-top: 50px;
    margin-bottom: 5px;
    padding: 0;
    color: #e13955;
`
const Subtitle = styled.p`
    text-align: center;
    font: bold 13px 'arial';
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
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
    width: 300px;
    padding-left: 10px;
    font: bold 14px 'arial';
    color: #e13955;
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
    width: 275px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #e13955;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    font: 500 15px 'arial';
    &:focus {
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
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font: bold 17px 'arial';
    color: white;
    background:#e13955;
    &:hover{
        background:#c5c1c1;
        cursor: pointer;
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

const SocialLoginWrapper = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
`

const SocialLoginButton = styled.div`
    margin: 10px 20px;
    padding: 0;
`

const Login = ({isDarkMode, themeClick}) => {
    const Firstfoucs = useRef(null);
    const Joinnavigate = useNavigate();
    const Loginnavigate = useNavigate();
    const [email, setemail] = useState("");
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
    
    const loginactive = email && pass;

    return(
        <LoginWrapper theme = {isDarkMode ? darkTheme : lightTheme}>
            {/* <Mode themeClick={themeClick} isDarkMode={isDarkMode}/> */}
            <LoginForm onSubmit={handleSubmit}>
                <Title>전맛알</Title>
                <Subtitle>전주 맛집을 알려드립니다!</Subtitle>
                <NameWrapper>
                    <Name>이메일</Name>
                </NameWrapper>
                <InputWrapper>  
                    <Input type="email" placeholder="이메일을 입력해주세요" ref={Firstfoucs} value={email} onChange={(e) => setemail(e.target.value)}/>
                </InputWrapper>
                <NameWrapper>
                    <Name>비밀번호</Name>
                </NameWrapper>
                <InputWrapper>
                    <Input type="password" placeholder="비밀번호를 입력해주세요" value={pass} onChange={(e) => setpass(e.target.value)}/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button type="submit">로그인</Button>
                </ButtonWrapper>
                <JoinButton onClick={onClick}>회원가입</JoinButton>
                <SocialLoginWrapper>
                    <SocialLoginButton>구글</SocialLoginButton>
                    <SocialLoginButton>카카오</SocialLoginButton>
                </SocialLoginWrapper>
                <p style={{textAlign:'center', font:'500 13px arial'}}>소셜계정을 통해 간편하게 로그인하세요!</p>
            </LoginForm>
        </LoginWrapper>
    );
};

export default Login;