import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { WhenSection } from "../../components/eventForm/whenSection";

configure({ adapter: new Adapter() });

test("should render Coordinator section correctly", () => {
  const errors = {
    date: "",
    event_time: "",
    duration: "",
  };

  const inputValues = {
    date: "",
    event_time: "",
    duration: "",
  };

  const handleChange = jest.fn;

  const wrapper = shallow(
    <WhenSection
      errors={errors}
      inputValues={inputValues}
      handleChange={handleChange}
    />
  );
  expect(wrapper.find("h2").text()).toBe("When");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
