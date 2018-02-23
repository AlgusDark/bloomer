import * as React from "react";
import { shallow } from "enzyme";

import { PanelBlock } from "./../../../src/components/Panel/PanelBlock";

describe("PanelBlock", () => {
  it("should render a custom component with PanelBlock props", () => {
    const customComponent = props => (
      <div>
        My Button <a {...props} />
      </div>
    );

    const customComponentRendered = (
      <div>
        My Button <a href="#" className="panel-block is-active" />
      </div>
    );

    const component = shallow(
      <PanelBlock href="#" isActive render={customComponent} />
    );
    expect(component.contains(customComponentRendered)).toBe(true);
  });

  it("should render a label with .panel-block", () => {
    const component = shallow(
      <PanelBlock tag="label">My PanelBlock</PanelBlock>
    );
    expect(
      component.contains(<label className="panel-block">My PanelBlock</label>)
    ).toBe(true);
  });

  it("should render an anchor with .panel-block", () => {
    const component = shallow(<PanelBlock href="#">My PanelBlock</PanelBlock>);
    expect(
      component.contains(
        <a href="#" className="panel-block">
          My PanelBlock
        </a>
      )
    ).toBe(true);
  });

  it("should render a div with .panel-block", () => {
    const component = shallow(<PanelBlock>My PanelBlock</PanelBlock>);
    expect(
      component.contains(<div className="panel-block">My PanelBlock</div>)
    ).toBe(true);
  });

  it("should render a div with .panel-block and modifiers", () => {
    const component = shallow(
      <PanelBlock isActive isWrapped className="custom">
        <span>Any Content</span>
      </PanelBlock>
    );
    expect(component.hasClass("panel-block")).toBe(true);
    expect(component.hasClass("is-active")).toBe(true);
    expect(component.hasClass("is-wrapped")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a div with .panel-block, modifiers and custom classNames", () => {
    const component = shallow(
      <PanelBlock className="custom">
        <span>Any Content</span>
      </PanelBlock>
    );
    expect(component.hasClass("panel-block")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a nav with .panel-block and custom classNames", () => {
    const component = shallow(
      <PanelBlock className="custom">
        <span>Any Content</span>
      </PanelBlock>
    );
    expect(component.hasClass("panel-block")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
