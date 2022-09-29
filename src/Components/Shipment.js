import styled from "styled-components";
import RadioInput from "./RadioInput";
import { shipmentList } from "../Constant/Invoice";

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const Shipment = () => {
  return (
    <Container>
      {shipmentList.map((value) => (
        <RadioInput registerName={"shipment"} key={value.name} value={value} />
      ))}
    </Container>
  );
};

export default Shipment;
