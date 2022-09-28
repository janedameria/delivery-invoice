import { useContext } from "react";
import styled from "styled-components";
import DeliveryForm from "../Components/DeliveryForm";
import Title from "../Components/Title";
import { FormContext } from "../Context/FormContext";

const SubContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.9rem;
    margin-left: 10px;
  }
`;

const Step1 = () => {
  const {
    isDropshipperChecked,
    setIsDropshipperChecked,
    register,
    errors,
    handleSubmit,
    watch,
  } = useContext(FormContext);
  const onSubmit = (data) => console.log(data);

  return (
    <SubContainer>
      <TopContainer>
        <Title text={"Delivery Details"} />
        <label>
          <input {...register("dropshipper")} type={"checkbox"} />
          <span>Send as dropshipper</span>
        </label>
      </TopContainer>
      <DeliveryForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        isDropshipperChecked={isDropshipperChecked}
        watch={watch}
      />
    </SubContainer>
  );
};

export default Step1;
