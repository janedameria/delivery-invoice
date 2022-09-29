import styled from "styled-components";
import { Button } from "./Styles";

const OrangeButton = ({ text, form }) => {
  return (
    <Button type="submit" form={form}>
      {text}
    </Button>
  );
};

export default OrangeButton;
