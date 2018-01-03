import * as React from 'react';
import { shallow } from 'enzyme';

import { DropdownItem } from './../../../../src/components/Dropdown/Menu/DropdownItem';

describe('Dropdown', () => {
    it('should render div with .dropdown-item', () => {
        const component = shallow(<DropdownItem>My DropdownItem</DropdownItem>);
        expect(component.hasClass('dropdown-item')).toBe(true);
    });

    it('should render div with .dropdown-item and modifiers', () => {
        const component = shallow(<DropdownItem isActive>My DropdownItem</DropdownItem>);
        expect(component.hasClass('dropdown-item')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
    });
});