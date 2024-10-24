import React,{useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Mode from "../components/Mode";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";
import backgroundimg from '../img/background.png';


const JoinContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${backgroundimg}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const JoinForm = styled.form`
    width: 500px;
    height: auto;
    margin: auto;
    padding: 0;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    background: white;
`;

const Title = styled.p`
    font: bold 35px 'arial';
    text-align: center;
    margin: 30px auto;
    padding: 0;
`;

const NameWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`;
const Name = styled.p`
    margin: 0;
    padding: 0;
    width: 400px;
    padding-left: 10px;
    font: bold 14px 'arial';
    color: #e13955;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`;

const Input = styled.input`
    border: none;
    width: 400px;
    height: 40px;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    font: 500 15px 'arial';
    border: 2px solid #e13955;
    &:focus {
        outline: none; 
    }
`;

const ErrorMessage = styled.p`
    color: #e13955;
    text-align: center;
    font: bold 13px 'arial';
    margin: 0;
    padding: 0;
    margin-top: -20px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0 auto;
    padding: 0px;
`;

const Button = styled.button`  
    padding: 0;
    margin: 0;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font: bold 17px 'arial';
    color: white;
    background: #e13955;
    &:hover{
        cursor: pointer;
        background: gray;
    }
`;

const LoginButton = styled.p`
    color: black;
    text-align: center;
    margin: 30px 225px;
    padding: 0;
    width: 50px;
    text-align: center;
    font: bold 15px 'arial';
    &:hover{
        color: gray;
        cursor: pointer;
    }
`;

const CertiButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    width: 500px;
`;

const CertiButton = styled.button`
    height: 40px;
    margin: 0;
    padding: 0;
    width: 100px;
    border-radius: 5px;
    color: white;
    background: #e13955;
    border: 2px solid #e13955;
    font: bold 15px 'arial';
    &:hover{
        background: #979595;
        border: 2px solid #979595;
    }
`;

const CertiInput = styled.input`
    border: none;
    width: 290px;
    height: 40px;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    font: 500 15px 'arial';
    margin-right: 10px;
    border: 2px solid #e13955;
    &:focus {
        outline: none; 
    }
`;

const Join = ({isDarkMode, themeClick}) =>{
    const Firstfoucs = useRef(null);
    const Loginnavigate = useNavigate();
    const [pass, setpass] = useState("");
    const [repass, setrepass] = useState("");
    const [email,setemail] = useState("");
    const [nickname, setnickname] = useState("");
    const [certi,setcerti] = useState("");
    const [error, setError] = useState(""); // 에러 메시지를 위한 상태 추가
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
    };

    // 비밀번호 확인 로직
    const passconfirm = (pass && repass) && (pass === repass);

    // 비밀번호 일치 여부에 따라 에러 메시지 설정
    useEffect(() => {
        if (pass && repass && pass !== repass) {
            setError('비밀번호가 맞지 않습니다.');
        } else {
            setError('');
        }
    }, [pass, repass]);

    const buttonactive = email && nickname && passconfirm && certi;

    return(
        <JoinContainer theme={isDarkMode ? darkTheme : lightTheme}>
            {/* <Mode themeClick={themeClick} isDarkMode={isDarkMode}/> */}
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
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWrapper>
                    <Button type="submit" disabled = {!buttonactive}>회원가입</Button>
                </ButtonWrapper>
                <LoginButton onClick={LoginClick}>로그인</LoginButton>
            </JoinForm>
        </JoinContainer>
    );
};

export default Join;
