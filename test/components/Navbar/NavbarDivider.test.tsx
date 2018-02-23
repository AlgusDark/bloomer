import * as React from "react";
import { shallow } from "enzyme";

import { NavbarDivider } from "./../../../src/components/Navbar/NavbarDivider";

describe("NavbarDivider", () => {
  it("should render a hr with .navbar-divider", () => {
    const component = shallow(<NavbarDivider />);
    expect(component.contains(<hr className="navbar-divider" />)).toBe(true);
  });

  it("should render a p with .navbar-divider", () => {
    const component = shallow(<NavbarDivider tag="p" />);
    expect(component.contains(<p className="navbar-divider" />)).toBe(true);
  });

  it("should render a hr with .navbar-divider and custom classNames", () => {
    const component = shallow(<NavbarDivider className="custom" />);
    expect(component.hasClass("navbar-divider")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
