import styled from "styled-components";

const BackButtonStyled = styled.button`
  border: none;
  background-color: inherit;
  position: ${(props) => props.absolute && "absolute"};
  margin: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    border-bottom: 1px solid #ccc;
  }
`;
const BackButton = ({ text, onClick, absolute = true }) => {
  if (absolute) {
    return (
      <BackButtonStyled absolute onClick={onClick}>
        {text}
      </BackButtonStyled>
    );
  }
  return <BackButtonStyled onClick={onClick}>{text}</BackButtonStyled>;
};

export default BackButton;
