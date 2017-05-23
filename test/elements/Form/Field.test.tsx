import * as React from 'react';
import { shallow } from 'enzyme';

import { Field } from './../../../src';

describe('Field', () => {
    it('should render a div with .field', () => {
        const component = shallow(<Field><span>Any Content</span></Field>);
        expect(component.contains(<div className='field'><span>Any Content</span></div>)).toBe(true);
    });

    it('should render a div with .field and custom classes', () => {
        const component = shallow(<Field className='my-custom-class loader'><span>Any Content</span></Field>);
        expect(component.hasClass('field')).toBe(true);
        expect(component.hasClass('my-custom-class')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a div with .field and modifiers', () => {
        const component = shallow(<Field isGroupedCentered><span>Any Content</span></Field>);
        expect(component.hasClass('field')).toBe(true);
        expect(component.hasClass('is-grouped-centered')).toBe(true);
    });

    it('should render a div with .field, modifiers and custom classes', () => {
        const component = shallow(<Field isGrouped isGroupedCentered isGroupedRight className='custom'><span>Any Content</span></Field>);
        expect(component.hasClass('field')).toBe(true);
        expect(component.hasClass('is-grouped')).toBe(true);
        expect(component.hasClass('is-grouped-right')).toBe(true);
        expect(component.hasClass('is-grouped-centered')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});