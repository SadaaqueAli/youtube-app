import React from 'react';
import styled from 'styled-components';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 40px;
  gap: 6px;
  border-radius: 8px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Input = styled.input`
  width: 100%;
  padding: 7px;
  border: 5px solid ${({ theme }) => theme.soft};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  //outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 4px;
  color: #3ea6ff;
  font-size: 14px;
  cursor: pointer;
`;

const More = styled.div`
margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  text-align: center;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 5px;
`;

const Link = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  text-decoration: underline;
`;

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handlerLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password, email });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        Axios.post("/auth/google",{
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        }).then((res)=>{
          dispatch(loginSuccess(res.data));
        })
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to videoTube</SubTitle>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handlerLogin}>Sign In</Button>
        <Title>Or</Title>
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
        <Title>Or</Title>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;