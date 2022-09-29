import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import OrangeButton from "../Components/OrangeButton";
import Title from "./Title";
import { goodsTotal, dropshipTotal, shipmentList } from "../Constant/Invoice";
import { FormContext } from "../Context/FormContext";

const SummaryContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 40%;
  margin-top: 2rem;
  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  width: 100%;
  color: #a8a8a8;
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  justify-content: space-between;
`;

const Span = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => (props.green ? "#1BD97B" : " #000")};
`;

const BigParagraph = styled.p`
  font-size: 1.5rem;
  color: #ff8a00;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const Summary = ({ textButton = "", formId }) => {
  const [btnText, setBtnText] = useState(textButton);
  const { watch } = useContext(FormContext);
  const [total, setTotal] = useState(0);
  const isDropshipperChecked = watch("dropshipper");
  const [shipmentValue, setShipmentValue] = useState();

  useEffect(() => {
    const t = goodsTotal.price;
    if (isDropshipperChecked) {
      return setTotal(t + dropshipTotal.price);
    }
    return setTotal(t);
  }, [isDropshipperChecked]);

  useEffect(() => {
    const value = watch("shipment");
    const res = shipmentList.find((v) => v.name == value);
    if (res) {
      const t = shipmentValue ? total - shipmentValue.price : total;

      setShipmentValue(res);
      return setTotal(t + res.price);
    }
  }, [watch("shipment")]);

  useEffect(() => {
    const value = watch("payment");
    if (value && value.length > 0) {
      setBtnText(`Pay with ${value}`);
    }
  }, [watch("payment")]);

  return (
    <SummaryContainer>
      <TopContainer>
        <Title text={"Summary"} />

        <Paragraph>10 items purchased</Paragraph>
        {shipmentValue && (
          <Paragraph column>
            Delivery Estimation
            <Span green>
              {shipmentValue.days} by {shipmentValue.name}
            </Span>
          </Paragraph>
        )}
      </TopContainer>
      <BodyContainer>
        <Paragraph>
          {goodsTotal.name}
          <Span>{goodsTotal.price}</Span>
        </Paragraph>
        {isDropshipperChecked && (
          <Paragraph>
            {dropshipTotal.name}
            <Span>{dropshipTotal.price}</Span>
          </Paragraph>
        )}

        {shipmentValue && (
          <Paragraph>
            {shipmentValue.name}
            <Span>{shipmentValue.price}</Span>
          </Paragraph>
        )}
        <BigParagraph>
          Total: <span>{total}</span>
        </BigParagraph>
        <OrangeButton text={btnText} form={formId} />
      </BodyContainer>
    </SummaryContainer>
  );
};

export default Summary;
