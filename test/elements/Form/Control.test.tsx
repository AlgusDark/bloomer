import * as React from 'react';
import { shallow } from 'enzyme';

import { Control } from './../../../src';

describe('Control', () => {
    it('should render a paragraph with .control', () => {
        const component = shallow(<Control><span>Any Content</span></Control>);
        expect(component.contains(<p className='control'><span>Any Content</span></p>)).toBe(true);
    });

    it('should render a paragraph with .control and .has-icons-left.has-icons.right', () => {
        const component = shallow(<Control hasIcons />);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('has-icons-left')).toBe(true);
        expect(component.hasClass('has-icons-right')).toBe(true);
    });

    it('should render a paragraph with .control and modifiers', () => {
        const component = shallow(<Control isExpanded isLoading hasIconsLeft hasIconsRight><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('is-loading')).toBe(true);
        expect(component.hasClass('has-icons-left')).toBe(true);
        expect(component.hasClass('has-icons-right')).toBe(true);
    });

    it('should render a paragraph with .control, modifiers and custom classNames', () => {
        const component = shallow(<Control isExpanded className ='custom loader'/>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a paragraph with .control and custom classNames', () => {
        const component = shallow(<Control className='custom loader'><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});