import React from 'react';
import { shallow } from 'enzyme';

import { Column } from './../../src/grid/Column';

describe('Column', () => {
    it('should render a div with .column', () => {
        const component = shallow(<Column>Any Content</Column>);
        expect(component.contains(<div className='column'>Any Content</div>)).toBe(true);
    });

    it('should render a p with .column', () => {
        const component = shallow(<Column tag='p'>Any Content</Column>);
        expect(component.contains(<p className='column'>Any Content</p>)).toBe(true);
    });

    it('should render a div with .column and modifiers', () => {
        const component = shallow(<Column isSize={2} isOffset={6} />);
        expect(component.hasClass('column')).toBe(true);
        expect(component.hasClass('is-2')).toBe(true);
        expect(component.hasClass('is-offset-6')).toBe(true);
    });

    it('should render a div with .column, modifiers and custom classNames', () => {
        const component = shallow(
            <Column isSize='1/2' className='custom' />
        );
        expect(component.hasClass('column')).toBe(true);
        expect(component.hasClass('is-half')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .column, modifiers and custom classNames', () => {
        const component = shallow(
            <Column isSize='full' className='custom' />
        );
        expect(component.hasClass('column')).toBe(true);
        expect(component.hasClass('is-full')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .column, modifiers and custom classNames', () => {
        const component = shallow(
            <Column isSize={{ mobile: 'full', lol: 12, tablet: '3/4', desktop: '12/42', default: 5 }} className='custom' />
        );
        expect(component.contains(
            <div className="column is-full-mobile is-three-quarters-tablet is-5 custom" />
        )).toBe(true);
    });

    it('should render a div with .column and custom classNames', () => {
        const component = shallow(
            <Column className='custom' />
        );
        expect(component.hasClass('column')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});