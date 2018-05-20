import * as React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from './../../../src/components/Navbar/Navbar';

describe('Navbar', () => {
  it('should render a nav with .navbar', () => {
    const component = shallow(<Navbar>My Nav</Navbar>);
    expect(component.contains(<nav className="navbar">My Nav</nav>)).toBe(true);
  });

  it('should render a div with .navbar', () => {
    const component = shallow(<Navbar tag="div">My Nav</Navbar>);
    expect(component.contains(<div className="navbar">My Nav</div>)).toBe(true);
  });

  it('should render a nav with .navbar and modifiers', () => {
    const component = shallow(
      <Navbar isTransparent>
        <span>Any Content</span>
      </Navbar>
    );
    expect(component.hasClass('navbar')).toBe(true);
    expect(component.hasClass('is-transparent')).toBe(true);
  });

  it('should render a nav with .navbar, modifiers and custom classNames', () => {
    const component = shallow(
      <Navbar isTransparent className="custom">
        <span>Any Content</span>
      </Navbar>
    );
    expect(component.hasClass('navbar')).toBe(true);
    expect(component.hasClass('is-transparent')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render a nav with .navbar and custom classNames', () => {
    const component = shallow(
      <Navbar className="custom">
        <span>Any Content</span>
      </Navbar>
    );
    expect(component.hasClass('navbar')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});
