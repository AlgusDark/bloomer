import React from 'react';
import { shallow } from 'enzyme';

import { DropdownMenu } from './../../../../src/components/Dropdown/Menu/DropdownMenu';

describe('Dropdown', () => {
    it('should render div with .dropdown-menu', () => {
        const component = shallow(<DropdownMenu>My DropdownMenu</DropdownMenu>);
        expect(component.hasClass('dropdown-menu')).toBe(true);
    });
});