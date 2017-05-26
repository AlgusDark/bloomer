import * as React from 'react';
import * as Bulma from './../src/bulma';

describe('removeProps functions', () => {
    const props = {
        href: '#',
        onClick: f => f,
    }

    it('should remove Alignment props', () => {
        const aligmentProps = {
            isCentered: true,
            isRight: true,
        }
        expect(Bulma.removeAlignmentProps({ ...props, ...aligmentProps }))
            .toEqual(props);
    });

    it('should remove Size props', () => {
        const aligmentProps = {
            isSmall: true,
            isMedium: true,
            isLarge: true,
        }
        expect(Bulma.removeSizeProps({ ...props, ...aligmentProps }))
            .toEqual(props);
    });

    it('should remove FullWidth props', () => {
        const fullWidthProps = {
            isFullWidth: true,
        }
        expect(Bulma.removeFullWidthProps({ ...props, ...fullWidthProps }))
            .toEqual(props);
    });

    it('should remove State props', () => {
        const stateProps = {
            isActive: true,
            isHovered: true,
            isFocused: true,
            isLoading: true,
        }
        expect(Bulma.removeStateProps({ ...props, ...stateProps }))
            .toEqual(props);
    });

    it('should remove Color props', () => {
        const ColorProps = {
            isWhite: true,
            isLight: true,
            isDark: true,
            isBlack: true,
            isPrimary: true,
            isInfo: true,
            isSuccess: true,
            isWarning: true,
            isDanger: true,
        }
        expect(Bulma.removeColorProps({ ...props, ...ColorProps }))
            .toEqual(props);
    });
});

describe('get*Modifiers functions', () => {
    it('should getAlignmentModifiers', () => {
        const props = {
            isCentered: true,
            isRight: true,
        }
        const expected = {
            'is-centered': true,
            'is-right': true,
        }
        expect(Bulma.getAlignmentModifiers(props))
            .toEqual(expected);
    });

    it('should getSizeModifiers', () => {
        const props = {
            isSmall: true,
            isMedium: true,
            isLarge: true,
        }
        const expected = {
            'is-small': true,
            'is-medium': true,
            'is-large': true,
        }
        expect(Bulma.getSizeModifiers(props))
            .toEqual(expected);
    });

    it('should getFullWidthModifiers', () => {
        const props = {
            isFullWidth: true,
        }
        const expected = {
            'is-fullwidth': true,
        }
        expect(Bulma.getFullWidthModifiers(props))
            .toEqual(expected);
    });

    it('should getStateModifiers', () => {
        const props = {
            isActive: true,
            isFocused: true,
            isHovered: true,
            isLoading: true,
        }
        const expected = {
            'is-active': true,
            'is-focused': true,
            'is-hovered': true,
            'is-loading': true,
        }
        expect(Bulma.getStateModifiers(props))
            .toEqual(expected);
    });

    it('should getColorModifiers', () => {
        const props = {
            isWhite: true,
            isLight: true,
            isDark: true,
            isBlack: true,
            isPrimary: true,
            isInfo: true,
            isSuccess: true,
            isWarning: true,
            isDanger: true,
        }
        const expected = {
            'is-white': true,
            'is-light': true,
            'is-dark': true,
            'is-black': true,
            'is-primary': true,
            'is-info': true,
            'is-success': true,
            'is-warning': true,
            'is-danger': true,
        }
        expect(Bulma.getColorModifiers(props))
            .toEqual(expected);
    });
})