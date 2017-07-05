import * as React from 'react';
import { shallow } from 'enzyme';

import { BreadcrumbItem } from './../../../src/components/Breadcrumb/BreadcrumbItem';

describe('BreadcrumbItem', () => {
    it('should render a li', () => {
        const component = shallow(<BreadcrumbItem>My Link</BreadcrumbItem>);
        expect(component.is('li')).toBe(true);
    });

    it('should render a ol', () => {
        const component = shallow(<BreadcrumbItem tag='ol'>My Link</BreadcrumbItem>);
        expect(component.is('ol')).toBe(true);
    });

    it('should render a li with modifiers', () => {
        const component = shallow(<BreadcrumbItem isActive>My Link</BreadcrumbItem>);
        expect(component.hasClass('is-active')).toBe(true);
    });

    it('should render a li with modifiers and classNames', () => {
        const component = shallow(<BreadcrumbItem isActive className='custom'>My Link</BreadcrumbItem>);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a li with classNames', () => {
        const component = shallow(<BreadcrumbItem className='custom'>My Link</BreadcrumbItem>);
        expect(component.hasClass('custom')).toBe(true);
    });
});