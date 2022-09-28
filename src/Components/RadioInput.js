import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../Context/FormContext";

const RadioInputStyled = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
  &:checked + label {
    background-color: #1bd97b;
  }
`;
const Label = styled.label`
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
const RadioInput = ({ registerName, value }) => {
  const { register } = useContext(FormContext);

  return (
    <>
      <RadioInputStyled
        {...register(registerName)}
        type="radio"
        id={value.name}
        value={value.name}
      />
      <Label htmlFor={value.name}>
        {value.name} <span>{value.price}</span>
      </Label>
    </>
  );
};

export default RadioInput;
