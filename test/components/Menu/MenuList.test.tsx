import * as React from 'react';
import { shallow } from 'enzyme';

import { MenuList } from './../../../src/components/Menu/MenuList';

describe('MenuList', () => {
    it('should render an ul with .menu-list', () => {
        const component = shallow(<MenuList><li>My MenuList</li></MenuList>);
        expect(component.contains(<ul className='menu-list'><li>My MenuList</li></ul>)).toBe(true);
    });

    it('should render an ul with .menu-list and custom classNames', () => {
        const component = shallow(<MenuList className='custom'><li>My MenuList</li></MenuList>);
        expect(component.hasClass('menu-list')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});