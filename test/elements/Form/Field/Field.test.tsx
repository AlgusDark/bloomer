import * as React from "react";
import { shallow } from "enzyme";

import { Field } from "./../../../../src/elements/Form/Field/Field";

describe("Field", () => {
  it("should render a div with .field", () => {
    const component = shallow(
      <Field>
        <span>Any Content</span>
      </Field>
    );
    expect(
      component.contains(
        <div className="field">
          <span>Any Content</span>
        </div>
      )
    ).toBe(true);
  });

  it("should render a div with .field and modifiers", () => {
    const component = shallow(<Field isGrouped hasAddons isHorizontal />);
    expect(component.hasClass("field")).toBe(true);
    expect(component.hasClass("is-grouped")).toBe(true);
    expect(component.hasClass("has-addons")).toBe(true);
    expect(component.hasClass("is-horizontal")).toBe(true);
  });

  it("should render a div with .field and .has-addons-right", () => {
    const component = shallow(
      <Field isGrouped="right" hasAddons="fullwidth" />
    );
    expect(component.hasClass("field")).toBe(true);
    expect(component.hasClass("is-grouped")).toBe(true);
    expect(component.hasClass("is-grouped-right")).toBe(true);
    expect(component.hasClass("has-addons")).toBe(true);
    expect(component.hasClass("has-addons-fullwidth")).toBe(true);
  });

  it("should render a div with .field and .has-addons-right", () => {
    const component = shallow(<Field isGrouped="lol" />);
    expect(component.hasClass("field")).toBe(true);
    expect(component.hasClass("is-grouped")).toBe(false);
    expect(component.hasClass("is-grouped-lol")).toBe(false);
  });

  it("should render a p with .field, modifiers and custom classNames", () => {
    const component = shallow(
      <Field tag="p" isGrouped className="custom">
        <span>Any Content</span>
      </Field>
    );
    expect(component.is("p")).toBe(true);
    expect(component.hasClass("field")).toBe(true);
    expect(component.hasClass("is-grouped")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a div with .field, modifiers and custom classNames", () => {
    const component = shallow(
      <Field isGrouped className="custom">
        <span>Any Content</span>
      </Field>
    );
    expect(component.hasClass("field")).toBe(true);
    expect(component.hasClass("is-grouped")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });

  it("should render a div with .field and custom classNames", () => {
    const component = shallow(
      <Field className="custom">
        <span>Any Content</span>
      </Field>
    );
    expect(component.hasClass("field")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
