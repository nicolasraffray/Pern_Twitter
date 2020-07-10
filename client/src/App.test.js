import React, { Fragment } from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  // it("should render the Login Component", () => {
  //   const wrapper = shallow(<App />);
  //   console.log("------------->", wrapper.find("Switch").length);

  //   expect(wrapper.find("Route").length).toEqual(1);
  // });
});
