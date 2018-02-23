import * as React from "react";
import { shallow } from "enzyme";

import { Nav } from "./../../../src/components/Nav/Nav";

describe("Nav", () => {
  it("should render a nav with .nav", () => {
    const component = shallow(<Nav>My Nav</Nav>);
    expect(component.contains(<nav className="nav">My Nav</nav>)).toBe(true);
  });

  it("should render a div with .nav", () => {
    const component = shallow(<Nav tag="div">My Nav</Nav>);
    expect(component.contains(<div className="nav">My Nav</div>)).toBe(true);
  });

  it("should render a nav with .nav and modifiers", () => {
    const component = shallow(
      <Nav hasShadow>
        <span>Any Content</span>
      </Nav>
    );
    expect(component.hasClass("nav")).toBe(true);
    expect(component.hasClass("has-shadow")).toBe(true);
  });

  it("should render a nav with .nav, modifiers and custom classNames", () => {
    const component = shallow(
      <Nav hasShadow className="custom">
        <span>Any Content</span>
      </Nav>
    );
    expect(component.hasClass("nav")).toBe(true);
    expect(component.hasClass("has-shadow")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a nav with .nav and custom classNames", () => {
    const component = shallow(
      <Nav className="custom">
        <span>Any Content</span>
      </Nav>
    );
    expect(component.hasClass("nav")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
