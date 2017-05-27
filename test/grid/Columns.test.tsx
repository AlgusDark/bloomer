import * as React from 'react';
import { shallow } from 'enzyme';

import { Columns } from './../../src/grid/Columns';

describe('Columns', () => {
    it('should render a div with .columns', () => {
        const component = shallow(<Columns>Any Content</Columns>);
        expect(component.contains(<div className='columns'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .columns and modifiers', () => {
        const component = shallow(
            <Columns
                isMobile
                isDesktop
                isGapless
                isGrid
                isMultiline
                isVCentered
                isCentered />
        );
        expect(component.hasClass('columns')).toBe(true);
        expect(component.hasClass('is-mobile')).toBe(true);
        expect(component.hasClass('is-desktop')).toBe(true);
        expect(component.hasClass('is-gapless')).toBe(true);
        expect(component.hasClass('is-grid')).toBe(true);
        expect(component.hasClass('is-multiline')).toBe(true);
        expect(component.hasClass('is-vcentered')).toBe(true);
        expect(component.hasClass('is-centered')).toBe(true);
    });

    it('should render a div with .columns, modifiers and custom classNames', () => {
        const component = shallow(
            <Columns isMobile className='custom' />
        );
        expect(component.hasClass('columns')).toBe(true);
        expect(component.hasClass('is-mobile')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .columns and custom classNames', () => {
        const component = shallow(
            <Columns className='custom' />
        );
        expect(component.hasClass('columns')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});