import * as React from "react";
import { shallow } from "enzyme";

import { NavItem } from "./../../../src/components/Nav/NavItem";

describe("NavItem", () => {
  it("should render a custom component with NavItem props", () => {
    const customComponent = props => (
      <div>
        My Button <a {...props} />
      </div>
    );

    const customComponentRendered = (
      <div>
        My Button <a href="#" className="nav-item is-brand" />
      </div>
    );

    const component = shallow(
      <NavItem href="#" isBrand render={customComponent} />
    );
    expect(component.contains(customComponentRendered)).toBe(true);
  });

  it("should render an anchor with .nav-item", () => {
    const component = shallow(<NavItem href="#">My NavItem</NavItem>);
    expect(
      component.contains(
        <a href="#" className="nav-item">
          My NavItem
        </a>
      )
    ).toBe(true);
  });

  it("should render a button with .nav-item", () => {
    const component = shallow(<NavItem tag="button">My NavItem</NavItem>);
    expect(
      component.contains(<button className="nav-item">My NavItem</button>)
    ).toBe(true);
  });

  it("should render a div with .nav-item", () => {
    const component = shallow(<NavItem>My NavItem</NavItem>);
    expect(component.contains(<div className="nav-item">My NavItem</div>)).toBe(
      true
    );
  });

  it("should render a div with .nav-item and modifiers", () => {
    const component = shallow(<NavItem isActive isTab isBrand />);
    expect(component.is("div")).toBe(true);
    expect(component.hasClass("nav-item")).toBe(true);
    expect(component.hasClass("is-active")).toBe(true);
    expect(component.hasClass("is-tab")).toBe(true);
    expect(component.hasClass("is-brand")).toBe(true);
  });

  it("should render a div with .nav-item, modifiers and custom classNames", () => {
    const component = shallow(<NavItem isActive className="custom" />);
    expect(component.is("div")).toBe(true);
    expect(component.hasClass("nav-item")).toBe(true);
    expect(component.hasClass("is-active")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a div with .nav-item and custom classNames", () => {
    const component = shallow(<NavItem className="custom" />);
    expect(component.is("div")).toBe(true);
    expect(component.hasClass("nav-item")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
