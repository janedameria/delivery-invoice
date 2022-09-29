import RadioInput from "../RadioInput/RadioInput";
import { shipmentList } from "../../Constant/Invoice";
import { Container } from "../Payment/Styles";

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
