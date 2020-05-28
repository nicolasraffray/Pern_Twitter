import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Login Component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render the Login Component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("button").length).toEqual(1);
  });
});
