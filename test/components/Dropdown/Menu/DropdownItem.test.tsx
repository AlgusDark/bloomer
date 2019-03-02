import React from 'react';
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

    it('should render an a if the href attribut is provided, with .dropdown-item', () => {
        const component = shallow(<DropdownItem href="#">My DropdownItem</DropdownItem>);
        expect(component.is('a')).toBe(true);
    });
    
    it('should render a p with .dropdown-item', () => {
        const component = shallow(<DropdownItem tag="p">My DropdownItem</DropdownItem>);
        expect(component.hasClass('dropdown-item')).toBe(true);
    });

    it('should render a custom component with DropdownItem props', () => {
        const customComponent = (props) => (
            <div>
                My Link <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Link <a className='dropdown-item custom' />
            </div>
        );

        const component = shallow(<DropdownItem className='custom' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });
});