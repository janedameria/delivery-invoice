import styled from "styled-components";
import RadioInput from "./RadioInput";

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const Shipment = () => {
  const shipmentList = [
    { name: "GO-SEND", price: 15000 },
    { name: "JNE", price: 9000 },
    { name: "Personal Courier", price: 29000 },
  ];
  return (
    <Container>
      {shipmentList.map((value) => (
        <RadioInput registerName={"shipments"} key={value.name} value={value} />
      ))}
    </Container>
  );
};

export default Shipment;
