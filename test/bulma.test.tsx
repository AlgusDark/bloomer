import * as React from 'react';
import { shallow, mount } from 'enzyme';

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

    it('should remove State props', () => {
        const stateProps = {
            isActive: true,
            isHovered: true,
            isFocused: true,
        }
        expect(Bulma.removeStateProps({ ...props, ...stateProps }))
            .toEqual(props);
    });

    it('should remove Color props', () => {
        const colorProps = {
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
        expect(Bulma.removeColorProps({ ...props, ...colorProps }))
            .toEqual(props);
    });

    it('should remove Heading props', () => {
        const HeadingProps = {
            is1: true,
            is2: true,
            is3: true,
            is4: true,
            is5: true,
            is6: true,
            isSpaced: true,
        }
        expect(Bulma.removeHeadingProps({ ...props, ...HeadingProps }))
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

    it('should getStateModifiers', () => {
        const props = {
            isActive: true,
            isFocused: true,
            isHovered: true,
        }
        const expected = {
            'is-active': true,
            'is-focused': true,
            'is-hovered': true,
        }
        expect(Bulma.getStateModifiers(props))
            .toEqual(expected);
    });

    it('should getLoadingModifiers', () => {
        const props = {
            isLoading: true,
        }
        const expected = {
            'is-loading': true,
        }
        expect(Bulma.getLoadingModifiers(props))
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

    it('should getHeadingModifiers', () => {
        const props = {
            is1: true,
            is2: true,
            is3: true,
            is4: true,
            is5: true,
            is6: true,
            isSpaced: true,
        }
        const expected = {
            'is-1': props.is1,
            'is-2': props.is2,
            'is-3': props.is3,
            'is-4': props.is4,
            'is-5': props.is5,
            'is-6': props.is6,
            'is-spaced': props.isSpaced,
        }
        expect(Bulma.getHeadingModifiers(props))
            .toEqual(expected);
    });
});

describe('getHeadingElement', () => {
    it('should return h1', () => {
        const props = {
            is1:true,
            is3:false,
            is4:true,
        }
        const actual = Bulma.getHeadingElement(props);
        expect(actual).toBe('h1');
    });
});

describe('withHelpersModifiers', () => {
    it('should render a Component without modification', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);

        expect(shallow(<WithHelpersModifiersComponent />).contains(<Component />)).toBe(true);
    });

    it('should render a Component with custom props', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement> & Bulma.Bulma.Color> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isBlack className='custom' />
        expect(shallow(renderedComponent).contains(<Component isBlack className='custom' />)).toBe(true);
    });

    it('should render a Component with className from Helpers without passing Helpers Props', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement> & Bulma.Bulma.Modifiers> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isBlack isFlexDesktopOnly isFullWidth className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isBlack')).toBe(true);
        expect(shallowedComponent.prop('isFlexDesktopOnly')).toBe(undefined);
        expect(shallowedComponent.prop('isFullWidth')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-desktop-only')).toBe(true);
        expect(shallowedComponent.hasClass('is-fullwidth')).toBe(true);
    });
});