import { useState } from "react";
import styled from "styled-components";
import BreadCrumb from "./Components/BreadCrumb";
import Summary from "./Components/Summary";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import FormContextProvider from "./Context/FormContext";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  min-height: 80vh;
`;

const Home = () => {
  const pages = ["DELIVERY", "PAYMENT", "FINISH"];
  const [page, setPage] = useState(pages[0]);
  const renderPage = () => {
    if (page == "DELIVERY") {
      return <Step1 />;
    }
    if (page == "PAYMENT") {
      return <Step2 />;
    }
  };

  const renderSummary = () => {
    if (page == "DELIVERY") {
      return <Summary textButton="Continue to Payment" />;
    }
    if (page == "PAYMENT") {
      return <Summary textButton="Pay With E-Wallet" />;
    }
  };
  return (
    <FormContextProvider>
      <Container>
        <BreadCrumb setPage={setPage} pages={pages} />
        {renderPage()}
        {renderSummary()}
      </Container>
    </FormContextProvider>
  );
};

export default Home;
