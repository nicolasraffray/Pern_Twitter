import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

describe("Post", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(<Fragment />).length).toEqual(1);
  });
});
