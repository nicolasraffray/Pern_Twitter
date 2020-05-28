import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";

describe("Signup", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
