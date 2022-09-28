import styled from "styled-components";
import Title from "../Components/Title";
import Shipment from "../Components/Shipment";
import Payment from "../Components/Payment";

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
  return (
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
  );
};

export default Step2;
