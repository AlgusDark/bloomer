import * as React from 'react';
import { shallow } from 'enzyme';

import { Tab } from './../../../src/components/Tabs/Tab';

describe('Tab', () => {
    it('should render a li', () => {
        const component = shallow(<Tab>My Link</Tab>);
        expect(component.contains(<li>My Link</li>)).toBe(true);
    });

    it('should render a li with .is-active', () => {
        const component = shallow(<Tab isActive className='custom'>My Link</Tab>);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});