import * as React from 'react';
import { shallow } from 'enzyme';

import { Control } from './../../../src/elements/Form/Control';

describe('Control', () => {
    it('should render a div with .control', () => {
        const component = shallow(<Control><span>Any Content</span></Control>);
        expect(component.contains(<div className='control'><span>Any Content</span></div>)).toBe(true);
    });

    it('should render a p with .control', () => {
        const component = shallow(<Control tag='p'><span>Any Content</span></Control>);
        expect(component.contains(<p className='control'><span>Any Content</span></p>)).toBe(true);
    });

    it('should render a div with .control and .has-icons-left.has-icons.right', () => {
        const component = shallow(<Control hasIcons />);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('has-icons-left')).toBe(true);
        expect(component.hasClass('has-icons-right')).toBe(true);
    });

    it('should render a div with .control and modifiers Array', () => {
        const component = shallow(<Control isExpanded isLoading hasIcons={['left', 'right']}><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('is-loading')).toBe(true);
        expect(component.hasClass('has-icons-left')).toBe(true);
        expect(component.hasClass('has-icons-right')).toBe(true);
    });

    it('should render a div with .control and modifiers String', () => {
        const component = shallow(<Control isExpanded isLoading hasIcons='right'><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('is-loading')).toBe(true);
        expect(component.hasClass('has-icons-right')).toBe(true);
    });

    it('should render a div with .control and modifiers with Bad Icons String', () => {
        const component = shallow(<Control isExpanded isLoading hasIcons='bad'><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('is-loading')).toBe(true);
    });

    it('should render a div with .control and modifiers with Bad Icons Array', () => {
        const component = shallow(<Control isExpanded isLoading hasIcons={['right', 'bad']}><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('is-loading')).toBe(true);
    });

    it('should render a div with .control, modifiers and custom classNames', () => {
        const component = shallow(<Control isExpanded className ='custom loader'/>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('is-expanded')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a div with .control and custom classNames', () => {
        const component = shallow(<Control className='custom loader'><span>Any Content</span></Control>);
        expect(component.hasClass('control')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});