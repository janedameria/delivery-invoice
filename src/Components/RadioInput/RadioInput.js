import { useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import { RadioInputStyled, Label } from "./Styles";

const RadioInput = ({ registerName, value }) => {
  const { register } = useContext(FormContext);

  return (
    <>
      <RadioInputStyled
        {...register(registerName, { required: true })}
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
