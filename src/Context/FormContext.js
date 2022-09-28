import { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const pages = ["DELIVERY", "PAYMENT", "FINISH"];
  const [page, setPage] = useState(pages[0]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const [shipment, setShipment] = useState({});

  return (
    <FormContext.Provider
      value={{
        register,
        errors,
        page,
        shipment,
        setShipment,
        setPage,
        pages,
        handleSubmit,
        watch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
