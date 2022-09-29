import { useEffect } from "react";
import styled, { css } from "styled-components";
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem 0;
`;
const InputContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.8rem;
    text-align: right;
  }
`;
const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  height: ${(props) => props.big && "120px"};

  ${(props) => {
    switch (props.mode) {
      case "error":
        return css`
          border: 2px solid #ff8a00;
        `;
      case "success":
        return css`
          border: 2px solid #1bd97b;
        `;

      default:
        return css`
          border: 2px solid #ccc;
        `;
    }
  }}
`;

const DeliveryForm = ({
  register,
  errors,
  watch,
  handleSubmit,
  onSubmit,
  setValue,
  clearErrors,
}) => {
  const renderMode = (name) => {
    if (errors[name]) {
      return "error";
    }
    const value = watch(name);
    if (value && value.length > 0) return "success";
  };

  const isDropshipperChecked = watch("dropshipper");
  useEffect(() => {
    if (!isDropshipperChecked) {
      setValue("dropshipperName", "");
      setValue("dropshipperPhoneNumber", "");
      clearErrors("dropshipperName");
      clearErrors("dropshipperPhoneNumber");
    }
  }, [isDropshipperChecked]);
  return (
    <Form id="deliveryform" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          mode={renderMode("email")}
          placeholder="Email"
          type={"email"}
          {...register("email", {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </InputContainer>
      <InputContainer>
        <Input
          mode={renderMode("dropshipperName")}
          disabled={!isDropshipperChecked}
          {...register("dropshipperName", {
            required: isDropshipperChecked,
          })}
          placeholder={"Dropshipper Name"}
        />
      </InputContainer>
      <InputContainer>
        <Input
          mode={renderMode("phoneNumber")}
          {...register("phoneNumber", {
            minLength: 6,
            maxLength: 20,
            pattern: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/,
          })}
          placeholder={"Phone Number"}
        />
      </InputContainer>
      <InputContainer>
        <Input
          mode={renderMode("dropshipperPhoneNumber")}
          disabled={!isDropshipperChecked}
          {...register("dropshipperPhoneNumber", {
            required: isDropshipperChecked,
            pattern: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/,
          })}
          placeholder={"Dropshipper Phone Number"}
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="deliveryAddress"
          big
          mode={renderMode("deliveryAddress")}
          {...register("deliveryAddress", { required: true, maxLength: 120 })}
          placeholder={"Delivery Address"}
        />
      </InputContainer>
    </Form>
  );
};

export default DeliveryForm;
