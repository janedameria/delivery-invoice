import styled from "styled-components";

export const BackButtonStyled = styled.button`
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
