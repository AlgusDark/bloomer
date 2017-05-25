import * as React from 'react';
import { shallow } from 'enzyme';

import { Column } from './../../src';

describe('Column', () => {
    it('should render a div with .column', () => {
        const component = shallow(<Column>Any Content</Column>);
        expect(component.contains(<div className='column'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .column and Modifiers', () => {
        const component = shallow(<Column is2 isOffset10Desktop />);
        expect(component.hasClass('column')).toBe(true);
        expect(component.hasClass('is-2')).toBe(true);
        expect(component.hasClass('is-offset-10-desktop')).toBe(true);
    });

    it('should render a div with .column, Modifiers and custom classes', () => {
        const component = shallow(
            <Column is2Mobile className='custom' />
        );
        expect(component.hasClass('column')).toBe(true);
        expect(component.hasClass('is-2-mobile')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});