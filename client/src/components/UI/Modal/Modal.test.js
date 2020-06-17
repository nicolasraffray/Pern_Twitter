import React, { Fragment } from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

describe("Post", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Modal post={{ post: "fake post" }} key={1} />);
    console.log(wrapper.find("Fragment"));
    expect(wrapper.find("Fragment").length).toEqual(1);
  });
});
