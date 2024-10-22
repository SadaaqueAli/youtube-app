import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Them';
import { useState } from 'react';

const Container = styled.div`
  display: flex; 
`;

const Main = styled.div`
  flex: 7;
  background-color:${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  flex: 1;

`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}


export default App;
