import { useContext } from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import Shipment from "../Components/Shipment";
import Payment from "../Components/Payment";
import Summary from "../Components/Summary";
import BackButton from "../Components/BackButton";
import { FormContext } from "../Context/FormContext";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

const SubContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 60%;
  > * {
    padding: 1rem;
  }
`;

const Step2 = () => {
  const { setPage, pages, handleSubmit } = useContext(FormContext);
  const onSubmit = () => setPage(pages[2]);

  return (
    <>
      <BackButton text={"Back to Delivery"} onClick={() => setPage(pages[0])} />
      <Container>
        <SubContainer>
          <Title text={"Shipment"} />
          <Shipment />
        </SubContainer>
        <SubContainer>
          <Title text={"Payment"} />
          <Payment />
        </SubContainer>
      </Container>
      <Summary
        textButton="Continue to Payment"
        formId={"payment-shipment-form"}
      />
    </>
  );
};

export default Step2;
