import { useContext, useEffect } from "react";
import DeliveryForm from "../../Components/DeliveryForm/DeliveryForm";
import Summary from "../../Components/Summary/Summary";
import Title from "../../Components/Title/Title";
import { FormContext } from "../../Context/FormContext";
import { Container, SubContainer, TopContainer } from "./Styles";

const Step1 = () => {
  const {
    isDropshipperChecked,
    register,
    setPage,
    pages,
    setValue,
    clearErrors,
    errors,
    handleSubmit,
    setFormValue,
    watch,
  } = useContext(FormContext);
  const onSubmit = () => {
    setFormValue(watch());
    setPage(pages[1]);
  };

  return (
    <Container>
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
          setValue={setValue}
          clearErrors={clearErrors}
          isDropshipperChecked={isDropshipperChecked}
          watch={watch}
        />
      </SubContainer>
      <Summary textButton="Continue to Payment" formId={"deliveryform"} />
    </Container>
  );
};

export default Step1;
