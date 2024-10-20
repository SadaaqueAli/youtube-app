import styled from 'styled-components';
import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const Container = styled.div`
  display: flex; 
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`

`;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
      </Main>
      <Wrapper>
        video cards
      </Wrapper>
    </Container>
  );
}

export default App;
