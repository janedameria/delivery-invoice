import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { goodsTotal } from "../Constant/Invoice";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const pages = ["DELIVERY", "PAYMENT", "FINISH"];
  const [page, setPage] = useState(pages[0]);
  const [total, setTotal] = useState(goodsTotal.price);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <FormContext.Provider
      value={{
        register,
        setValue,
        errors,
        page,
        setPage,
        total,
        clearErrors,
        setTotal,
        pages,
        reset,
        handleSubmit,
        watch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
