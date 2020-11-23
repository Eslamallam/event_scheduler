import React from "react";
import { useForm } from "../../helpers/useForm";
import { validate } from "../../helpers/validate";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { AboutSection } from "./AboutSection";
import { CoordinatorSection } from "./CoordinatorSection";
import { WhenSection } from "./whenSection";
import { SubmitSection } from "./SubmitSection";
import { SuccessSection } from "./SuccessSection";

export const EventForm = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    chars,
    maxChars,
    showSuccess,
  } = useForm(formSubmit, validate);

  const dispatch = useDispatch();

  function formSubmit() {
    const formData = {};

    // data to be submitted
    formData.title = values.title;
    formData.description = values.description;
    formData.category_id = parseInt(values.category_id) || null;
    formData.paid_event = values.event_type === "paid" ? true : false;
    formData.event_fee = parseInt(values.event_fee) || null;
    formData.reward = parseInt(values.reward) || null;
    formData.date = values.date + "T" + values.event_time;
    formData.duration = parseInt(values.duration) * 60 * 60 || null;
    formData.coordinator = {
      email: values.coordinator.split("-")[0],
      id: values.coordinator.split("-")[1],
    };

    console.log(formData);
    dispatch(actions.doCreateEvent(formData));
  }

  return (
    <div className="event">
      {showSuccess ? (
        <SuccessSection />
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <AboutSection
            handleChange={handleChange}
            inputValues={values}
            errors={errors}
            chars={chars}
            maxChars={maxChars}
          />
          <CoordinatorSection
            handleChange={handleChange}
            inputValues={values}
            errors={errors}
          />
          <WhenSection
            handleChange={handleChange}
            inputValues={values}
            errors={errors}
          />

          <SubmitSection />
        </form>
      )}
    </div>
  );
};
