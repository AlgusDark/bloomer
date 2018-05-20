import * as React from 'react';
import { shallow } from 'enzyme';

import { NavbarBrand } from './../../../src/components/Navbar/NavbarBrand';

describe('NavbarBrand', () => {
  it('should render a div with .navbar-brand', () => {
    const component = shallow(<NavbarBrand>My NavbarBrand</NavbarBrand>);
    expect(
      component.contains(<div className="navbar-brand">My NavbarBrand</div>)
    ).toBe(true);
  });

  it('should render a p with .navbar-brand', () => {
    const component = shallow(
      <NavbarBrand tag="p">My NavbarBrand</NavbarBrand>
    );
    expect(
      component.contains(<p className="navbar-brand">My NavbarBrand</p>)
    ).toBe(true);
  });

  it('should render a div with .navbar-brand and custom classNames', () => {
    const component = shallow(
      <NavbarBrand className="custom">
        <span>Any Content</span>
      </NavbarBrand>
    );
    expect(component.hasClass('navbar-brand')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});
