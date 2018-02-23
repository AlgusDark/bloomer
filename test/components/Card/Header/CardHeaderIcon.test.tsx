import * as React from "react";
import { shallow } from "enzyme";

import { CardHeaderIcon } from "./../../../../src/components/Card/Header/CardHeaderIcon";

describe("CardHeaderIcon", () => {
  it("should render a custom component with CardHeaderIcon props", () => {
    const customComponent = props => (
      <div>
        My Link <a {...props} />
      </div>
    );

    const customComponentRendered = (
      <div>
        My Link <a className="card-header-icon custom" />
      </div>
    );

    const component = shallow(
      <CardHeaderIcon className="custom" render={customComponent} />
    );
    expect(component.contains(customComponentRendered)).toBe(true);
  });

  it("should render an anchor with .card-header-icon", () => {
    const component = shallow(
      <CardHeaderIcon>My CardHeaderIcon</CardHeaderIcon>
    );
    expect(
      component.contains(<a className="card-header-icon">My CardHeaderIcon</a>)
    ).toBe(true);
  });

  it("should render a div with .card-header-icon", () => {
    const component = shallow(
      <CardHeaderIcon tag="div">My CardHeaderIcon</CardHeaderIcon>
    );
    expect(
      component.contains(
        <div className="card-header-icon">My CardHeaderIcon</div>
      )
    ).toBe(true);
  });

  it("should render an anchor with .card-header-icon and custom classNames", () => {
    const component = shallow(
      <CardHeaderIcon className="custom">
        <span>Any CardHeaderIcon</span>
      </CardHeaderIcon>
    );
    expect(component.hasClass("card-header-icon")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
