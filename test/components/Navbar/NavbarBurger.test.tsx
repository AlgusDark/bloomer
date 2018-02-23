import * as React from "react";
import { shallow } from "enzyme";

import { NavbarBurger } from "./../../../src/components/Navbar/NavbarBurger";

describe("NavbarBurger", () => {
  it("should render a div with .navbar-burger", () => {
    const component = shallow(<NavbarBurger />);
    expect(
      component.contains(
        <div className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      )
    ).toBe(true);
  });

  it("should render a p with .navbar-burger", () => {
    const component = shallow(<NavbarBurger tag="p" />);
    expect(
      component.contains(
        <p className="navbar-burger">
          <span />
          <span />
          <span />
        </p>
      )
    ).toBe(true);
  });

  it("should render a div with .navbar-burger and custom classNames", () => {
    const component = shallow(<NavbarBurger className="custom" />);
    expect(component.hasClass("navbar-burger")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
