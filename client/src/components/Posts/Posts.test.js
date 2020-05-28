import React from "react";
import { shallow } from "enzyme";
import Posts from "./Posts";
import Post from "./Post/Post";

describe("Posts", () => {
  it("should render the Login Component", () => {
    const wrapper = shallow(<Posts />);
    expect(wrapper.containsMatchingElement(<Post />)).toEqual(true);
  });
});
