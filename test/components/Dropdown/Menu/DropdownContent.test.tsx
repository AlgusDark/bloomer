import * as React from "react";
import { shallow } from "enzyme";

import { DropdownContent } from "./../../../../src/components/Dropdown/Menu/DropdownContent";

describe("Dropdown", () => {
  it("should render div with .dropdown-content", () => {
    const component = shallow(
      <DropdownContent>My DropdownContent</DropdownContent>
    );
    expect(component.hasClass("dropdown-content")).toBe(true);
  });

  it("should render p with .dropdown-content", () => {
    const component = shallow(
      <DropdownContent tag="p">My DropdownContent</DropdownContent>
    );
    expect(component.is("p")).toBe(true);
    expect(component.hasClass("dropdown-content")).toBe(true);
  });
});
