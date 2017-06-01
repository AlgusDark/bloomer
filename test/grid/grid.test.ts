import * as React from 'react';
import * as Grid from './../../src/grid/grid';

describe('removeProps functions', () => {
    const props = {
        href: '#',
        onClick: f => f,
    }

    it('should remove Grid.HorizontalSize props', () => {
        const horizontalSizeProps: any = {
            isSize: 12
        }
        expect(Grid.removeHorizontalSizeProps({ ...props, ...horizontalSizeProps }))
            .toEqual(props);
    });

    it('should remove Grid.Size props', () => {
        const sizeProps = {
            isFull: true,
            isNarrow: true,
            isThreeQuarters: true,
            isTwoThirds: true,
            isHalf: true,
            isOneThird: true,
            isOneQuarter: true,
        }
        expect(Grid.removeSizeProps({ ...props, ...sizeProps }))
            .toEqual(props);
    });

    it('should remove Grid.Offset props', () => {
        const offsetProps: any = {
            isOffsetThreeQuarters: true,
            isOffsetTwoThirds: true,
            isOffsetHalf: true,
            isOffsetOneThird: true,
            isOffsetOneQuarter: true,
            isOffset: 1,
        }
        expect(Grid.removeOffsetProps({ ...props, ...offsetProps }))
            .toEqual(props);
    });
});

describe('get*Modifiers functions', () => {
    it('should getHorizontalSizeModifiers', () => {
        expect(Grid.getHorizontalSizeModifiers({ isSize: 1 })).toEqual({ 'is-1': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 2 })).toEqual({ 'is-2': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 3 })).toEqual({ 'is-3': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 4 })).toEqual({ 'is-4': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 5 })).toEqual({ 'is-5': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 6 })).toEqual({ 'is-6': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 7 })).toEqual({ 'is-7': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 8 })).toEqual({ 'is-8': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 9 })).toEqual({ 'is-9': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 10 })).toEqual({ 'is-10': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 11 })).toEqual({ 'is-11': true, });
        expect(Grid.getHorizontalSizeModifiers({ isSize: 12 })).toEqual({ 'is-12': true, });

        const fixture: any = [
            { isSize: "string" },
            { isSize: [] },
            { isSize: 15 },
            { isSize: null },
            { isSize: undefined },
        ];
        expect(Grid.getHorizontalSizeModifiers(fixture[0])).toEqual({});
        expect(Grid.getHorizontalSizeModifiers(fixture[1])).toEqual({});
        expect(Grid.getHorizontalSizeModifiers(fixture[2])).toEqual({});
        expect(Grid.getHorizontalSizeModifiers(fixture[3])).toEqual({});
        expect(Grid.getHorizontalSizeModifiers(fixture[4])).toEqual({});
    });

    it('should getSizeModifiers', () => {
        const props = {
            isFull: true,
            isNarrow: true,
            isThreeQuarters: true,
            isTwoThirds: true,
            isHalf: true,
            isOneThird: true,
            isOneQuarter: true,
        }
        const expected = {
            'is-full': true,
            'is-narrow': true,
            'is-three-quarters': true,
            'is-two-thirds': true,
            'is-half': true,
            'is-one-third': true,
            'is-one-quarter': true,
        }

        expect(Grid.getSizeModifiers(props)).toEqual(expected);

        expect(Grid.getSizeModifiers({isMobile: 1})).toEqual({'is-1-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 2})).toEqual({'is-2-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 3})).toEqual({'is-3-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 4})).toEqual({'is-4-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 5})).toEqual({'is-5-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 6})).toEqual({'is-6-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 7})).toEqual({'is-7-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 8})).toEqual({'is-8-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 9})).toEqual({'is-9-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 10})).toEqual({'is-10-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 11})).toEqual({'is-11-mobile': true});
        expect(Grid.getSizeModifiers({isMobile: 12})).toEqual({'is-12-mobile': true});
    });

    it('should getOffsetModifiers', () => {
        const props: any = {
            isOffsetThreeQuarters: true,
            isOffsetTwoThirds: true,
            isOffsetHalf: true,
            isOffsetOneThird: true,
            isOffsetOneQuarter: true,
            isOffset: 12,
        }
        const expected = {
            'is-offset-three-quarters': true,
            'is-offset-two-thirds': true,
            'is-offset-half': true,
            'is-offset-one-third': true,
            'is-offset-one-quarter': true,
            'is-offset-12': true,
        }

        expect(Grid.getOffsetModifiers(props))
            .toEqual(expected);
    });
})