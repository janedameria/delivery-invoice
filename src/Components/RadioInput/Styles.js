import styled from "styled-components";

export const RadioInputStyled = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
  &:checked + label {
    background-color: #1bd97b;
  }
`;
export const Label = styled.label`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 0.8rem 1.2rem;
  font-family: Arial;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  width: 180px;
  cursor: pointer;
`;
