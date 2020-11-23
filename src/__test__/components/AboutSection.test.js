import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { AboutSection } from "../../components/eventForm/AboutSection";

configure({ adapter: new Adapter() });

test("should render About section correctly", () => {
  const errors = {
    title: "",
    description: "",
    category_id: "",
    event_fee: "",
    event_type: "",
    reward: "",
  };

  const inputValues = {
    title: "",
    description: "",
    category_id: "",
    event_fee: "",
    event_type: "",
    reward: "",
  };

  const chars = {
    charsLeft: 140,
  };

  const handleChange = jest.fn;

  const wrapper = shallow(
    <AboutSection
      errors={errors}
      inputValues={inputValues}
      handleChange={handleChange}
      chars={chars}
      maxChars={140}
    />
  );
  expect(wrapper.find("h2").text()).toBe("About");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
