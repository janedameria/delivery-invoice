import { useContext } from "react";
import Title from "../../Components/Title/Title";
import Shipment from "../../Components/Shipment/Shipment";
import Payment from "../../Components/Payment/Payment";
import Summary from "../../Components/Summary/Summary";
import BackButton from "../../Components/BackButton/BackButton";
import { FormContext } from "../../Context/FormContext";
import { SubContainer, Container, ErrorMessage } from "./Styles";

const Step2 = () => {
  const { setPage, pages, handleSubmit, errors } = useContext(FormContext);
  const onSubmit = () => setPage(pages[2]);

  return (
    <>
      <BackButton text={"Back to Delivery"} onClick={() => setPage(pages[0])} />
      <Container>
        <form id="payment-shipment-form" onSubmit={handleSubmit(onSubmit)}>
          <SubContainer>
            <Title text={"Shipment"} />
            <Shipment />
            {errors.shipment && <ErrorMessage>This is required</ErrorMessage>}
          </SubContainer>
          <SubContainer>
            <Title text={"Payment"} />
            <Payment />
            {errors.payment && <ErrorMessage>This is required</ErrorMessage>}
          </SubContainer>
        </form>
      </Container>
      <Summary
        textButton="Continue to Payment"
        formId={"payment-shipment-form"}
      />
    </>
  );
};

export default Step2;
