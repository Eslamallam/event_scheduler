import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { Header } from "../../components/header";

configure({ adapter: new Adapter() });

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h2").text()).toBe("New event");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
