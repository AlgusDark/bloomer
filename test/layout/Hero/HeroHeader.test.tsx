import * as React from "react";
import { shallow } from "enzyme";

import { HeroHeader } from "./../../../src/layout/Hero/HeroHeader";

describe("HeroHeader", () => {
  it("should render a header with .hero-head", () => {
    const component = shallow(<HeroHeader>Any Content</HeroHeader>);
    expect(
      component.contains(<header className="hero-head">Any Content</header>)
    ).toBe(true);
  });

  it("should render a div with .hero-head", () => {
    const component = shallow(<HeroHeader tag="div">Any Content</HeroHeader>);
    expect(
      component.contains(<div className="hero-head">Any Content</div>)
    ).toBe(true);
  });

  it("should render a header with .hero-head and custom classNames", () => {
    const component = shallow(<HeroHeader className="custom loader" />);
    expect(component.hasClass("hero-head")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
    expect(component.hasClass("loader")).toBe(true);
  });
});
