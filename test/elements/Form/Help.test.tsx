import * as React from "react";
import { shallow } from "enzyme";

import { Help } from "./../../../src/elements/Form/Help";

describe("Help", () => {
  it("should render a paragraph with .help", () => {
    const component = shallow(<Help>My Help</Help>);
    expect(component.contains(<p className="help">My Help</p>)).toBe(true);
  });

  it("should render a div with .help", () => {
    const component = shallow(<Help tag="div">My Help</Help>);
    expect(component.contains(<div className="help">My Help</div>)).toBe(true);
  });

  it("should render a paragraph with .help and modifiers", () => {
    const component = shallow(<Help isColor="dark" />);
    expect(component.hasClass("help")).toBe(true);
    expect(component.hasClass("is-dark")).toBe(true);
  });

  it("should render a paragraph with .help, modifiers and classNames", () => {
    const component = shallow(<Help isColor="dark" className="custom" />);
    expect(component.hasClass("help")).toBe(true);
    expect(component.hasClass("is-dark")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a paragraph with .help and classNames", () => {
    const component = shallow(<Help className="custom" />);
    expect(component.hasClass("help")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
