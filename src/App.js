import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Them';
import { useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';

const Container = styled.div`
  display: flex; 
`;

const Main = styled.div`
  flex: 7;
  background-color:${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route index="/" element={<Home type="random" />} />
                <Route path="trends" element={<Home type="trend" />} />
                <Route path="subscriptions" element={<Home type="sub" />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="video/:id" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
