import RadioInput from "../RadioInput/RadioInput";
import { Container } from "./Styles";

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
