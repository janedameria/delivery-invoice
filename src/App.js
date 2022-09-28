import Home from "./Home";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fffae6;
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;

  position: relative;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
