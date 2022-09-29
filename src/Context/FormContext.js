import { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { goodsTotal } from "../Constant/Invoice";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const pages = ["DELIVERY", "PAYMENT", "FINISH"];
  const [page, setPage] = useState(localStorage.getItem("page") || pages[0]);
  const [total, setTotal] = useState(goodsTotal.price);
  const [formValue, setFormValue] = useState(
    JSON.parse(window.localStorage.getItem("formValue")) || {}
  );

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
    defaultValues: formValue,
  });

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [setPage, page]);
  useEffect(() => {
    localStorage.setItem("formValue", JSON.stringify(formValue));
  }, [formValue, setFormValue]);
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
        setFormValue,
        handleSubmit,
        watch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
