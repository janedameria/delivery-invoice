import styled from "styled-components";
import RadioInput from "./RadioInput";

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const Payment = () => {
  const shipmentList = [
    { name: "e-Wallet" },
    { name: "Bank Transfer" },
    { name: "Virtual Account" },
  ];
  return (
    <Container>
      {shipmentList.map((value) => (
        <RadioInput registerName={"payment"} key={value.name} value={value} />
      ))}
    </Container>
  );
};

export default Payment;
