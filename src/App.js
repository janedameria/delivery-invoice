import Home from "./Home";
import styled from "styled-components";
import FormContextProvider from "./Context/FormContext";

const Container = styled.div`
  background-color: #fffae6;
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;

  position: relative;
`;

function App() {
  return (
    <FormContextProvider>
      <Container>
        <Home />
      </Container>
    </FormContextProvider>
  );
}

export default App;
