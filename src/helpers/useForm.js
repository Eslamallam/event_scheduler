import { useState, useEffect } from "react";

export const useForm = (callBack, validate) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    category_id: "",
    event_fee: "",
    event_type: "",
    reward: "",
    coordinator: "",
    email: "",
    date: "",
    event_time: "",
    duration: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category_id: "",
    event_fee: "",
    event_type: "",
    reward: "",
    coordinator: "",
    email: "",
    date: "",
    event_time: "",
    duration: "",
  });
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const maxChars = 140;

  const [chars, setChars] = useState({ charsLeft: maxChars });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "description") {
      let input = e.target.value;

      setChars({
        charsLeft: maxChars - input.length,
      });
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "", //hide input error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsFormSubmit(true);
  };

  useEffect(() => {
    //check if there is no errors
    if (Object.keys(errors).length === 0 && isFormSubmit) {
      callBack();
      setShowSuccess(true);
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    chars,
    maxChars,
    showSuccess,
  };
};
