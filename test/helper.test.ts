import * as React from 'react';

import { getHTMLProps, combineModifiers } from './../src/helpers';
import {
    Bulma,
    removeAlignmentProps,
    removeColorProps,
    removeFullWidthProps,
    removeSizeProps,
    removeStateProps,
} from './../src/bulma';
import {
    Grid,
    getSizeModifiers,
} from './../src/grid/grid'

describe('getHTMLProps', () => {
    const props = {
        href: '#',
        onClick: f => f,
    }

    it('should return props when no removeFunctions are passed', () => {
        expect(getHTMLProps(props))
            .toEqual(props);
    })

    it('should remove aligment props', () => {
        const aligmentProps: Bulma.Alignment = {
            isCentered: true,
            isRight: true,
        }
        expect(getHTMLProps({ ...props, ...aligmentProps }, removeAlignmentProps))
            .toEqual(props);
    });

    it('should remove color and State props', () => {
        const colorWithStateProps: Bulma.Color & Bulma.State = {
            isPrimary: true,
            isLoading: true,
        }
        expect(getHTMLProps({ ...props, ...colorWithStateProps }, removeColorProps, removeStateProps))
            .toEqual(props);
    });

    it('should remove fullWidth props', () => {
        const fullWidthProps: Bulma.FullWidth = {
            isFullWidth: true,
        }
        expect(getHTMLProps({ ...props, ...fullWidthProps }, removeFullWidthProps))
            .toEqual(props);
    });

    it('should remove Size props', () => {
        const SizeProps: Bulma.Size = {
            isLarge: true,
            isSmall: false,
        }
        expect(getHTMLProps({ ...props, ...SizeProps }, removeSizeProps))
            .toEqual(props);
    });
});

describe('combineModifiers', () => {
    it('should return an empty object when no get*ModifiersFunctions are passed', () => {
        const props = {
            isNarrow: true,
        }
        expect(combineModifiers(props))
            .toEqual({});
    });

    it('should return Size Modifiers', () => {
        const props = {
            isNarrow: true,
            isTwoThirds: true,
            custom:true
        };
        const expected = {
            'is-narrow': true,
            'is-two-thirds': true,
        }

        expect(combineModifiers(props, getSizeModifiers))
            .toEqual(expected);
    })

})