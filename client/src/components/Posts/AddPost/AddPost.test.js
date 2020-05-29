import React, { Fragment } from "react";
import { shallow } from "enzyme";
import AddPost from "./AddPost";

describe("AddPost", () => {
  it("adds a tweet via the online form", () => {
    const eventObj = { target: { value: "test tweet" } };
    expect(wrapper.find("input.form-control").props().value).toBe("");
    wrapper.find("input.form-control").simulate("change", eventObj);
    expect(wrapper.find("input.form-control").props().value).toBe("test tweet");
  });
});
