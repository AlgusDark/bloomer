import * as React from "react";
import { shallow } from "enzyme";

import { ModalCardBody } from "./../../../../src/components/Modal/Card/ModalCardBody";

describe("ModalCardBody", () => {
  it("should render a section with .modal-card-body", () => {
    const component = shallow(<ModalCardBody />);
    expect(component.contains(<section className="modal-card-body" />)).toBe(
      true
    );
  });

  it("should render a div with .modal-card-body", () => {
    const component = shallow(<ModalCardBody tag="div" />);
    expect(component.contains(<div className="modal-card-body" />)).toBe(true);
  });

  it("should render a section with .modal-card-body and custom classNames", () => {
    const component = shallow(<ModalCardBody className="custom" />);
    expect(component.hasClass("modal-card-body")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
