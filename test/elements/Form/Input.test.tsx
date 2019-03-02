import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './../../../src/elements/Form/Input';

describe('Input', () => {
    it('should render an input with .input', () => {
        const component = shallow(<Input/>);
        expect(component.contains(<input type='text' className='input' />)).toBe(true);
    });

    it('should render an input with .input and modifiers', () => {
        const component = shallow(<Input type='password'/>);
        expect(component.contains(<input type='password' className='input' />)).toBe(true);
    });

    it('should render an input with .input and modifiers', () => {
        const component = shallow(
            <Input
                isActive
                isHovered
                isFocused />
        );
        expect(component.hasClass('input')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('is-hovered')).toBe(true);
        expect(component.hasClass('is-focused')).toBe(true);
    });

    it('should render an input with .input, modifiers and custom classNames', () => {
        const component = shallow(<Input isActive className='custom' />);
        expect(component.hasClass('input')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render an input with .input and custom classNames', () => {
        const component = shallow(<Input className='custom' />);
        expect(component.hasClass('input')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});