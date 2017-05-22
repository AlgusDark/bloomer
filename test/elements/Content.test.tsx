import * as React from 'react';
import { shallow } from 'enzyme';

import { Content } from './../../src/elements/Content';

describe('Content', () => {
    it('should render a div with .content', () => {
        const component = shallow(<Content>My Content</Content>);
        expect(component.contains(<div className='content'>My Content</div>)).toBe(true);
    });

    it('should render a div with .delete and custom classNames', () => {
        const component = shallow(<Content className='my-custom-class loader'>My Content</Content>);
        expect(component.hasClass('content')).toBe(true);
        expect(component.hasClass('my-custom-class')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a div with .content and size modifiers', () => {
        const component = shallow(<Content isMedium>My Content</Content>);
        expect(component.hasClass('content')).toBe(true);
        expect(component.hasClass('is-medium')).toBe(true);
    });
});