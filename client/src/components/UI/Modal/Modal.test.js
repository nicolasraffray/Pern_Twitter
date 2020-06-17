import React, { Fragment } from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

describe("Post", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Modal post={{ post: "fake post" }} key={1} />);
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render buttons also", () => {
    const wrapper = shallow(<Modal post={{ post: "fake post" }} key={1} />);
    expect(wrapper.find("button").length).toEqual(4);
  });
});
