import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import OrangeButton from "../Components/OrangeButton";
import Title from "./Title";
import { FormContext } from "../Context/FormContext";

const SummaryContainer = styled.div`
  border-left: 1px solid #ffd29d;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 40%;
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  width: 100%;
  color: #a8a8a8;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #000;
`;

const BigParagraph = styled.p`
  font-size: 1.5rem;
  color: #ff8a00;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const Summary = ({ textButton = "" }) => {
  const { watch } = useContext(FormContext);
  const goodsTotal = {
    name: "Costs of goods",
    value: 500000,
  };
  const dropshipTotal = {
    name: "Dropshipping Fee",
    value: 5900,
  };

  const [total, setTotal] = useState(0);

  const isDropshipperChecked = watch("dropshipper");

  useEffect(() => {
    const t = goodsTotal.value;
    if (isDropshipperChecked) {
      return setTotal(t + dropshipTotal.value);
    }
    return setTotal(t);
  }, [isDropshipperChecked]);

  return (
    <SummaryContainer>
      <div className="">
        <Title text={"Summary"} />

        <Paragraph>10 items purchased</Paragraph>
      </div>
      <BodyContainer>
        <Paragraph>
          {goodsTotal.name}
          <Span>{goodsTotal.value}</Span>
        </Paragraph>
        {isDropshipperChecked && (
          <Paragraph>
            {dropshipTotal.name}
            <Span>{dropshipTotal.value}</Span>
          </Paragraph>
        )}
        <BigParagraph>
          Total: <span>{total}</span>
        </BigParagraph>
        <OrangeButton text={textButton} />
      </BodyContainer>
    </SummaryContainer>
  );
};

export default Summary;
