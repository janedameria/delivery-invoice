import styled from "styled-components";

const TitleStyled = styled.h1`
  color: #ff8a00;
`;
const Title = ({ text }) => {
  return <TitleStyled>{text}</TitleStyled>;
};

export default Title;
