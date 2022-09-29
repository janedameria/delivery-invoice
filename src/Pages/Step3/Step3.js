import { useContext, useState, useEffect } from "react";
import BackButton from "../../Components/BackButton/BackButton";
import Title from "../../Components/Title/Title";
import { FormContext } from "../../Context/FormContext";
import Summary from "../../Components/Summary/Summary";
import { shipmentList } from "../../Constant/Invoice";
import { SubContainer, Container } from "../Step2/Styles";

const Step3 = () => {
  const { setPage, pages, watch, reset } = useContext(FormContext);
  const [shipment, setShipment] = useState();

  useEffect(() => {
    const value = watch("shipment");
    const data = shipmentList.find((v) => v.name == value);
    setShipment(data);
  }, []);

  const handleBackOnClick = () => {
    reset();
    window.localStorage.removeItem("formValue");
    setPage(pages[0]);
  };
  const randomString = () => {
    const length = 5;
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  };
  return (
    <Container>
      <SubContainer>
        <Title text={"Thank You"} />

        <p>Order ID: {randomString()}</p>
        {shipment && (
          <p>
            Your order will be delivered {shipment.days} with {shipment.name}
          </p>
        )}
        <BackButton
          text={"Go to homepage"}
          absolute={false}
          onClick={handleBackOnClick}
        />
      </SubContainer>
      <Summary />
    </Container>
  );
};

export default Step3;
