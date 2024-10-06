import styled from "styled-components";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: ivory;
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
    font: bold 50px 'arial';
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
    padding-left: 10px;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.15), inset 3px 3px 15px rgba(0, 0, 0, 0.15);
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
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
    background: gray;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
    &:hover{
        background: gray;
        color: #c5c1c1;
    }
`

const Login = () => {
    return(
        <LoginWrapper>
            <LoginForm>
                <Title>Login</Title>
                <NameWrapper>
                    <Name>아이디</Name>
                </NameWrapper>
                <InputWrapper>  
                    <Input type="text" placeholder="아이디를 입력해주세요"/>
                </InputWrapper>
                <NameWrapper>
                    <Name>비밀번호</Name>
                </NameWrapper>
                <InputWrapper>
                    <Input type="password" placeholder="비밀번호를 입력해주세요"/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button>로그인</Button>
                </ButtonWrapper>
            </LoginForm>
        </LoginWrapper>
    );
};

export default Login;