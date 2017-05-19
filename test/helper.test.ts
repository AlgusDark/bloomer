import * as React from 'react';

import { classNames, getHTMLProps, withModifiers } from './../src/helpers';
import {
    Bulma,
    removeAlignmentProps,
    removeColorProps,
    removeFullWidthProps,
    removeSizeProps,
    removeStateProps
} from './../src/bulma';

describe('classNames', () => {
    const props = {
        href: '#',
        onClick: f => f,
    }

    it('should return undefined when there are no modifiers', () => {
        expect(classNames(props)).toBe(undefined);
    });

    it('should return Bulma modifier class', () => {
        expect(classNames({ ...props, ...{ isActive: true } }))
            .toBe('is-active');
    });

    it('should return className', () => {
        expect(classNames({ ...props, ...{ className: 'lol' } }))
            .toBe('lol');
    });

    it('should return bulma modifier with ClassName', () => {
        expect(classNames({ ...props, ...{ isActive: true }, ...{ className: 'lol' } }))
            .toBe('is-active lol');
    });
});

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
    })
})