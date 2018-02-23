import * as React from "react";
import { shallow } from "enzyme";

import { NavbarEnd } from "./../../../src/components/Navbar/NavbarEnd";

describe("NavbarEnd", () => {
  it("should render a div with .navbar-end", () => {
    const component = shallow(<NavbarEnd />);
    expect(component.contains(<div className="navbar-end" />)).toBe(true);
  });

  it("should render a p with .navbar-end", () => {
    const component = shallow(<NavbarEnd tag="p" />);
    expect(component.contains(<p className="navbar-end" />)).toBe(true);
  });

  it("should render a div with .navbar-end and custom classNames", () => {
    const component = shallow(<NavbarEnd className="custom" />);
    expect(component.hasClass("navbar-end")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
