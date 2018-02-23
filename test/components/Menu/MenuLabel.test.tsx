import * as React from "react";
import { shallow } from "enzyme";

import { MenuLabel } from "./../../../src/components/Menu/MenuLabel";

describe("MenuLabel", () => {
  it("should render a p with .menu-label", () => {
    const component = shallow(<MenuLabel>My MenuLabel</MenuLabel>);
    expect(component.contains(<p className="menu-label">My MenuLabel</p>)).toBe(
      true
    );
  });

  it("should render a div with .menu-label", () => {
    const component = shallow(<MenuLabel tag="div">My MenuLabel</MenuLabel>);
    expect(
      component.contains(<div className="menu-label">My MenuLabel</div>)
    ).toBe(true);
  });

  it("should render a p with .message and custom classNames", () => {
    const component = shallow(
      <MenuLabel className="custom">
        <span>Any Content</span>
      </MenuLabel>
    );
    expect(component.hasClass("menu-label")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
