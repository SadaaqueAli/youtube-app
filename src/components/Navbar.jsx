import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 3px; 
  border: 1px solid #ccc;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  width:100%;
  padding:5px;
  font-weight:500px;
  color:${({ theme }) => theme.text};
  background-color: transparent;
  outline:none;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  gap: 5px;
  padding: 3px 5px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 4px;
  font-weight: 300;
  margin-top: 2px;
  cursor: pointer;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
`;

export default function Navbar() {

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <PersonSearchIcon />
        </Search>
        {currentUser ? (
          <User>
            <MissedVideoCallIcon />
            <Avatar/>
            {currentUser.name}
          </User>
        ) : (
          <Link to="signin" style={{ textDecoration: 'none', color: 'black' }}>
            <Button>
              <AccountCircleIcon />
              Sign In
            </Button>
          </Link>)}
      </Wrapper>
    </Container>
  );
}
