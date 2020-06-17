import React from "react";
import { shallow } from "enzyme";
import Post from "./Post";

describe("Post", () => {
  it("should render <div /> 's", () => {
    const wrapper = shallow(<Post post={{ post: "fake post" }} />);
    expect(wrapper.find("div").length).toEqual(4);
  });
});
