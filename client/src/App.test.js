import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "./components/Auth/Login/Login";
import Switch from "react-router-dom";

describe("App", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Login Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Switch />)).toEqual(true);
  });
});
