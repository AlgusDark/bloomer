import * as React from 'react';
import { shallow } from 'enzyme';

import { TabList } from './../../../src/components/Tabs/TabList';

describe('TabList', () => {
    it('should render a ul', () => {
        const component = shallow(<TabList />);
        expect(component.is('ul')).toBe(true);
    });

    it('should render a ol', () => {
        const component = shallow(<TabList tag='ol'/>);
        expect(component.is('ol')).toBe(true);
    });

    it('should render a ul withouth bad modifiers data', () => {
        const component = shallow(<TabList isAlign='lol' />);
        expect(component.hasClass('is-lol')).toBe(false);
    });

    it('should render a ul with modifiers', () => {
        const component = shallow(<TabList isAlign='left' />);
        expect(component.hasClass('is-left')).toBe(true);
    });

    it('should render a ul with modifiers and classNames', () => {
        const component = shallow(<TabList isAlign='right' className='custom' />);
        expect(component.hasClass('is-right')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a ul with classNames', () => {
        const component = shallow(<TabList className='custom' />);
        expect(component.hasClass('custom')).toBe(true);
    });


});