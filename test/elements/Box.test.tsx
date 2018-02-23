import * as React from "react";
import { shallow } from "enzyme";

import { Box } from "./../../src/elements/Box";

describe("Box", () => {
  it("should render a div with .box", () => {
    const component = shallow(<Box>Any Content</Box>);
    expect(component.contains(<div className="box">Any Content</div>)).toBe(
      true
    );
  });

  it("should render a p with .box", () => {
    const component = shallow(<Box tag="p">Any Content</Box>);
    expect(component.contains(<p className="box">Any Content</p>)).toBe(true);
  });

  it("should render a div with .box and custom classNames", () => {
    const component = shallow(<Box className="custom loader" />);
    expect(component.hasClass("box")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
    expect(component.hasClass("loader")).toBe(true);
  });
});
