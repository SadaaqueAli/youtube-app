import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

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
  border-radius: 3px; /* Correct border-radius */
  border: 1px solid #ccc; /* Proper border */
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
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

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <PersonSearchIcon />
        </Search>
        <Button>
          <AccountCircleIcon /> Sign In
        </Button>
      </Wrapper>
    </Container>
  );
}
