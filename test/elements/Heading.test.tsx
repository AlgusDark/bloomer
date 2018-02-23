import * as React from "react";
import { shallow } from "enzyme";

import { Heading } from "./../../src/elements/Heading";

describe("Heading", () => {
  it("should render a p with .heading", () => {
    const component = shallow(<Heading>My Heading</Heading>);
    expect(component.contains(<p className="heading">My Heading</p>)).toBe(
      true
    );
  });

  it("should render a div with .heading", () => {
    const component = shallow(<Heading tag="div">My Heading</Heading>);
    expect(component.contains(<div className="heading">My Heading</div>)).toBe(
      true
    );
  });

  it("should render a p with .heading and custom classNames", () => {
    const component = shallow(
      <Heading className="custom">
        <span>Any Content</span>
      </Heading>
    );
    expect(component.hasClass("heading")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
