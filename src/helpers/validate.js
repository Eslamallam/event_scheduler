export const validate = (values) => {
  let errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  if (values.event_type === "paid") {
    if (!values.event_fee) {
      errors.event_fee = "Fee is required";
    }
  }

  if (!values.coordinator) {
    errors.coordinator = "Responsible is required";
  }

  if (!values.date || !values.event_time) {
    errors.date = "Date fields are required";
  }

  if (values.email && values.email.length > 0) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(values.email)) {
      errors.email = "Email is not valid";
    }
  }

  return errors;
};
