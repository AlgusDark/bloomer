import * as React from 'react';
import { shallow } from 'enzyme';

import { Page } from './../../../src';

describe('Page', () => {
    it('should render a li', () => {
        const component = shallow(<Page>My Link</Page>);
        expect(component.contains(<li>My Link</li>)).toBe(true);
    });

    it('should render a li with custom classes', () => {
        const component = shallow(<Page className='custom'>My Link</Page>);
        expect(component.hasClass('custom')).toBe(true);
    });
});