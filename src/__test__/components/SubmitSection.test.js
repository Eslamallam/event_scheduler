import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { SubmitSection } from "../../components/eventForm/SubmitSection";

configure({ adapter: new Adapter() });

test("should render Success section correctly", () => {
  const wrapper = shallow(<SubmitSection />);
  expect(wrapper.find("button").text()).toBe("publish event");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
