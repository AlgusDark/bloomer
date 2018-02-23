import * as React from "react";
import { shallow } from "enzyme";

import { LevelItem } from "./../../../src/components/Level/LevelItem";

describe("LevelItem", () => {
  it("should render a div with .level-item", () => {
    const component = shallow(<LevelItem>My LevelItem</LevelItem>);
    expect(
      component.contains(<div className="level-item">My LevelItem</div>)
    ).toBe(true);
  });

  it("should render a p with .level-item", () => {
    const component = shallow(<LevelItem tag="p">My LevelItem</LevelItem>);
    expect(component.contains(<p className="level-item">My LevelItem</p>)).toBe(
      true
    );
  });

  it("should render an anchor with .level-item", () => {
    const component = shallow(<LevelItem href="#">My LevelItem</LevelItem>);
    expect(
      component.contains(
        <a href="#" className="level-item">
          My LevelItem
        </a>
      )
    ).toBe(true);
  });

  it("should render a div with .level-item and modifiers", () => {
    const component = shallow(<LevelItem isFlexible>My LevelItem</LevelItem>);
    expect(component.hasClass("level-item")).toBe(true);
    expect(component.hasClass("is-flexible")).toBe(true);
  });

  it("should render a div with .level-item, modifiers and classNames", () => {
    const component = shallow(
      <LevelItem isFlexible className="custom">
        My LevelItem
      </LevelItem>
    );
    expect(component.hasClass("level-item")).toBe(true);
    expect(component.hasClass("is-flexible")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a div with .level-item and custom classNames", () => {
    const component = shallow(
      <LevelItem className="custom">
        <span>Any Content</span>
      </LevelItem>
    );
    expect(component.hasClass("level-item")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
