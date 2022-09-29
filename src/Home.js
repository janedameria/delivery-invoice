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
  const renderPage = () => {
    if (page == "DELIVERY") {
      return <Step1 />;
    }
    if (page == "PAYMENT") {
      return <Step2 />;
    }
    if (page == "FINISH") {
      return <Step3 />;
    }
  };

  return (
    <Container>
      <BreadCrumb />
      {renderPage()}
    </Container>
  );
};

export default Home;
