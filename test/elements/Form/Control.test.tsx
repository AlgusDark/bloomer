import * as React from 'react';
import { shallow } from 'enzyme';

import { Control } from './../../../src/elements/Form/Control';

describe('Control', () => {
    it('should render a paragraph with .control', () => {
        const component = shallow(<Control><span>Any Content</span></Control>);
        expect(component.contains(<p className='control'><span>Any Content</span></p>)).toBe(true);
    });

    it('should render a paragraph with .control and modifiers', () => {
        const component = shallow(<Control hasIcons isExpanded><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('has-icons-left')).toBe(true);
        expect(component.hasClass('has-icons-right')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
    });

    it('should render a paragraph with .control and custom classes', () => {
        const component = shallow(<Control className='my-custom-class loader'><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('my-custom-class')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});