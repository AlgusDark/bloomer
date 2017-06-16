import * as React from 'react';
import { shallow } from 'enzyme';

import { Tile } from './../../src/grid/Tile';

describe('Tile', () => {
    it('should render a custom component with Tile props', () => {
        const customComponent = (props) => (
            <div {...props}> My Tile </div>
        );

        const customComponentRendered = (
            <div className='tile'> My Tile </div>
        );

        const component = shallow(<Tile render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render a div with .tile', () => {
        const component = shallow(<Tile>Any Content</Tile>);
        expect(component.contains(<div className='tile'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .tile.is-3', () => {
        const component = shallow(<Tile isSize={3}>Any Content</Tile>);
        expect(component.contains(<div className='tile is-3'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .tile and modifiers', () => {
        const component = shallow(
            <Tile
                isAncestor
                isChild
                isParent
                isVertical />
        );
        expect(component.hasClass('tile')).toBe(true);
        expect(component.hasClass('is-ancestor')).toBe(true);
        expect(component.hasClass('is-child')).toBe(true);
        expect(component.hasClass('is-parent')).toBe(true);
        expect(component.hasClass('is-vertical')).toBe(true);
    });

    it('should render a div with .tile, modifiers and custom classNames', () => {
        const component = shallow(<Tile isAncestor className='custom' />);
        expect(component.hasClass('tile')).toBe(true);
        expect(component.hasClass('is-ancestor')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .tile and custom classNames', () => {
        const component = shallow(<Tile isAncestor className='custom' />);
        expect(component.hasClass('tile')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});