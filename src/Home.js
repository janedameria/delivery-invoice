import { useContext } from "react";
import styled from "styled-components";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb";
import Step1 from "./Pages/Step1/Step1";
import Step2 from "./Pages/Step2/Step2";
import { FormContext } from "./Context/FormContext";
import Step3 from "./Pages/Step3/Step3";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  min-height: 80vh;
`;

const Home = () => {
  const { page } = useContext(FormContext);
  if (page == "DELIVERY") {
    const activeLinks = [1];
    return (
      <Container>
        <BreadCrumb activeLinks={activeLinks} />
        <Step1 />
      </Container>
    );
  }
  if (page == "PAYMENT") {
    const activeLinks = [1, 2];
    return (
      <Container>
        <BreadCrumb activeLinks={activeLinks} />
        <Step2 />
      </Container>
    );
  }
  if (page == "FINISH") {
    const activeLinks = [1, 2, 3];
    return (
      <Container>
        <BreadCrumb activeLinks={activeLinks} />
        <Step3 />
      </Container>
    );
  }
};

export default Home;
