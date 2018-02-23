import * as React from "react";
import { shallow } from "enzyme";

import { ModalClose } from "./../../../src/components/Modal/ModalClose";

describe("ModalClose", () => {
  it("should render a custom component with ModalClose props", () => {
    const customComponent = props => (
      <div>
        My Button <a {...props} />
      </div>
    );

    const customComponentRendered = (
      <div>
        My Button <a href="#" className="modal-close is-small" />
      </div>
    );

    const component = shallow(
      <ModalClose href="#" isSize="small" render={customComponent} />
    );
    expect(component.contains(customComponentRendered)).toBe(true);
  });

  it("should render a button with .modal-close", () => {
    const component = shallow(<ModalClose />);
    expect(component.contains(<button className="modal-close" />)).toBe(true);
  });

  it("should render an anchor with .modal-close", () => {
    const component = shallow(<ModalClose tag="a" />);
    expect(component.contains(<a className="modal-close" />)).toBe(true);
  });

  it("should render a button with .modal-close and custom classNames", () => {
    const component = shallow(<ModalClose className="custom" />);
    expect(component.hasClass("modal-close")).toBe(true);
    expect(component.hasClass("custom")).toBe(true);
  });
});
