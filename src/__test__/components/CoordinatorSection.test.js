import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { CoordinatorSection } from "../../components/eventForm/CoordinatorSection";

configure({ adapter: new Adapter() });

test("should render Coordinator section correctly", () => {
  const errors = {
    coordinator: "",
    email: "",
  };

  const inputValues = {
    coordinator: "",
    email: "",
  };

  const handleChange = jest.fn;

  const wrapper = shallow(
    <CoordinatorSection
      errors={errors}
      inputValues={inputValues}
      handleChange={handleChange}
    />
  );
  expect(wrapper.find("h2").text()).toBe("Coordinator");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
