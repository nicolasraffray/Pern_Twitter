import React, { Fragment } from "react";
import { shallow } from "enzyme";
import Posts from "./Posts";

describe("Posts", () => {
  it("should render the Login Component", () => {
    const wrapper = shallow(<Posts />);
    expect(wrapper.containsMatchingElement(<Fragment />).toEqual(true));
  });
});
