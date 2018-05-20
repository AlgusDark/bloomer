import * as React from 'react';
import { shallow } from 'enzyme';

import { DropdownDivider } from './../../../../src/components/Dropdown/Menu/DropdownDivider';

describe('Dropdown', () => {
  it('should rendern hr with .dropdown-divider', () => {
    const component = shallow(
      <DropdownDivider>My DropdownDivider</DropdownDivider>
    );
    expect(component.is('hr')).toBe(true);
    expect(component.hasClass('dropdown-divider')).toBe(true);
  });

  it('should rendern an img with .dropdown-divider', () => {
    const component = shallow(
      <DropdownDivider tag="img">My DropdownDivider</DropdownDivider>
    );
    expect(component.is('img')).toBe(true);
    expect(component.hasClass('dropdown-divider')).toBe(true);
  });
});
