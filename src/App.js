import styled from 'styled-components';
import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const Container = styled.div`
  display: flex; 
`;

const Main = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  flex: 1;

`;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  );
}


export default App;
