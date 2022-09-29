import { useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import { Container, UL } from "./Styles";

const BreadCrumb = () => {
  const { page } = useContext(FormContext);

  return (
    <Container>
      <UL>
        <li>
          <span>1.</span>
          <a>Delivery</a>
        </li>
        <li>
          <span>2.</span>
          <a>Payment</a>
        </li>
        <li>
          <span>3.</span>
          <a>Finish</a>
        </li>
      </UL>
    </Container>
  );
};

export default BreadCrumb;
