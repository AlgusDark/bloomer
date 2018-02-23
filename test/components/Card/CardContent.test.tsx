import * as React from "react";
import { shallow } from "enzyme";

import { CardContent } from "./../../../src/components/Card/CardContent";

describe("CardContent", () => {
  it("should render a div with .card-content", () => {
    const component = shallow(<CardContent>My CardContent</CardContent>);
    expect(
      component.contains(<div className="card-content">My CardContent</div>)
    ).toBe(true);
  });

  it("should render a p with .card-content", () => {
    const component = shallow(
      <CardContent tag="p">My CardContent</CardContent>
    );
    expect(
      component.contains(<p className="card-content">My CardContent</p>)
    ).toBe(true);
  });

  it("should render a div with .card-content and custom classNames", () => {
    const component = shallow(
      <CardContent className="custom">
        <span>Any Content</span>
      </CardContent>
    );
    expect(component.hasClass("card-content")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
