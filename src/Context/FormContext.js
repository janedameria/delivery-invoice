import { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const [summaries, setSummaries] = useState([]);
  // useEffect(() => {
  //   if (watch("dropshipper")) {
  //     const dropship = {
  //       name: "Dropshipping Fee",
  //       price: 5900,
  //     };

  //     setSummaries([...summaries, dropship]);
  //   }
  //   console.log("watch", watch());
  //   console.log("summaries", summaries);
  // }, [watch]);

  return (
    <FormContext.Provider
      value={{
        register,
        errors,
        handleSubmit,
        summaries,
        watch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
