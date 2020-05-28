import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
