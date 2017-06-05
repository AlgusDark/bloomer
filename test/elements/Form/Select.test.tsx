import * as React from 'react';
import { shallow } from 'enzyme';

import { Select } from './../../../src/elements/Form/Select';

describe('Select', () => {
    it('should render a div.select with select', () => {
        const component = shallow(<Select><option>My Option</option></Select>);
        expect(component.contains(
            <div className='select'>
                <select><option>My Option</option></select>
            </div>
        )).toBe(true);
    });

    it('should render a div.select.is-disabled:disabled with select:disabled', () => {
        const component = shallow(<Select disabled><option>My Option</option></Select>);
        expect(component.contains(
            <div className='select is-disabled'>
                <select disabled><option>My Option</option></select>
            </div>
        )).toBe(true);
    });

    it('should render a div.select with select and modifiers', () => {
        const component = shallow(
            <Select isSize='small' isColor='black' isLoading />
        );
        expect(component.hasClass('select')).toBe(true);
        expect(component.hasClass('is-small')).toBe(true);
    });

    it('should render a div.select with select, modifiers and custom classNames', () => {
        const component = shallow(<Select disabled isLoading className='custom' />);
        expect(component.hasClass('select')).toBe(true);
        expect(component.hasClass('is-disabled')).toBe(true);
        expect(component.hasClass('is-loading')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div.select with select and custom classNames', () => {
        const component = shallow(<Select className='custom' />);
        expect(component.hasClass('select')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});