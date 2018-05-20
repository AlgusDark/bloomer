import * as React from 'react';
import { shallow } from 'enzyme';

import { Dropdown } from './../../../src/components/Dropdown/Dropdown';

describe('Dropdown', () => {
  it('should render div with .dropdown that is active', () => {
    const component = shallow(<Dropdown isActive>My Dropdown</Dropdown>);
    expect(component.hasClass('dropdown')).toBe(true);
    expect(component.hasClass('is-active')).toBe(true);
  });

  it('should render p with .dropdown', () => {
    const component = shallow(<Dropdown tag="p">My Dropdown</Dropdown>);
    expect(component.is('p')).toBe(true);
    expect(component.hasClass('dropdown')).toBe(true);
  });

  it('should show a div with .dropdown and modifiers', () => {
    const component = shallow(
      <Dropdown isAlign="right" isHoverable>
        My Dropdown
      </Dropdown>
    );
    expect(component.hasClass('dropdown')).toBe(true);
    expect(component.hasClass('is-hoverable')).toBe(true);
    expect(component.hasClass('is-right')).toBe(true);
  });
});
