import React from 'react';
import { shallow } from 'enzyme';

import { Tab } from './../../../src/components/Tabs/Tab';

describe('Tab', () => {
    it('should render a li', () => {
        const component = shallow(<Tab>My Link</Tab>);
        expect(component.is('li')).toBe(true);
    });

    it('should render a ol', () => {
        const component = shallow(<Tab tag='ol'>My Link</Tab>);
        expect(component.is('ol')).toBe(true);
    });

    it('should render a li with modifiers', () => {
        const component = shallow(<Tab isActive>My Link</Tab>);
        expect(component.hasClass('is-active')).toBe(true);
    });

    it('should render a li with modifiers and classNames', () => {
        const component = shallow(<Tab isActive className='custom'>My Link</Tab>);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a li with classNames', () => {
        const component = shallow(<Tab className='custom'>My Link</Tab>);
        expect(component.hasClass('custom')).toBe(true);
    });
});