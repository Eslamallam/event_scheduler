import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { SuccessSection } from "../../components/eventForm/SuccessSection";

configure({ adapter: new Adapter() });

test("should render Success section correctly", () => {
  const wrapper = shallow(<SuccessSection />);
  expect(wrapper.find("h2").text()).toBe("Success");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
