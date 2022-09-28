import styled from "styled-components";

const Button = styled.button`
  background-color: #ff8a00;
  color: #fff;
  border: none;
  padding: 0.8rem 1rem;
  margin-top: 1rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const OrangeButton = ({ text, form }) => {
  return (
    <Button type="submit" form={form}>
      {text}
    </Button>
  );
};

export default OrangeButton;
