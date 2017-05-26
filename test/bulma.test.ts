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

describe.skip('get*Modifiers functions', () => {
    
})