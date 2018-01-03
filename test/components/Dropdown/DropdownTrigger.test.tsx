import * as React from 'react';
import { shallow } from 'enzyme';

import { DropdownTrigger } from './../../../src/components/Dropdown/DropdownTrigger';

describe('Dropdown', () => {
    it('should render div with .dropdown-trigger', () => {
        const component = shallow(<DropdownTrigger>My DropdownTrigger</DropdownTrigger>);
        expect(component.hasClass('dropdown-trigger')).toBe(true);
    });
});