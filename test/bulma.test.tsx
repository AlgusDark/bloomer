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
        const HeadingProps: Bulma.Bulma.Heading = {
            isHeading: 3,
            isSize: 2,
            isParagraph: true,
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
        const props: any = {
            isSize: 1,
            isSpaced: true,
        }
        const expected = {
            'is-1': true,
            'is-spaced': true,
        }
        expect(Bulma.getHeadingModifiers(props))
            .toEqual(expected);
    });
});

describe('getHeadingElement', () => {
    it('should return h1', () => {
        expect(Bulma.getHeadingElement({ isHeading: 1 })).toBe('h1');

        const fixture: any[] = [
            { 1: null },
            { isHeading: '1000' },
            { isHeading: 1000 },
            { isHeading: null },
            { isHeading: undefined },
        ];

        fixture.forEach(item => expect(Bulma.getHeadingElement(item)).toBe('h1'));

    });

    it('should return h2', () => {
        expect(Bulma.getHeadingElement({ isHeading: 2 })).toBe('h2');
    });
    it('should return h3', () => {
        expect(Bulma.getHeadingElement({ isHeading: 3 })).toBe('h3');
    });
    it('should return h4', () => {
        expect(Bulma.getHeadingElement({ isHeading: 4 })).toBe('h4');
    });
    it('should return h5', () => {
        expect(Bulma.getHeadingElement({ isHeading: 5 })).toBe('h5');
    });
    it('should return h6', () => {
        expect(Bulma.getHeadingElement({ isHeading: 6 })).toBe('h6');
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
        const renderedComponent = <WithHelpersModifiersComponent isBlack isFullWidth className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isBlack')).toBe(true);
        expect(shallowedComponent.prop('isFullWidth')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
        expect(shallowedComponent.hasClass('is-fullwidth')).toBe(true);
    });

    it('should render a Component with .flex', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlex className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlex={['mobile',
            'tablet',
            'touch',
            'desktop',
            'widescreen']} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex-mobile')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-tablet')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-touch')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-desktop')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-widescreen')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component without isFlex prop when someone provides bad data', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent: any = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlex='none' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex "shortcut" modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlex={['m', 'tt', 't', 'd', 'w']} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex-mobile')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-tablet')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-touch')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-desktop')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-widescreen')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex-only modifiers as string', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlexOnly='d' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlexOnly')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex-desktop-only')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component without isFlexOnly prop when someone provides bad data', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent: any = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlexOnly='none' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex-only modifiers as Array', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isFlexOnly={['tablet', 'desktop']} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex-tablet-only')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-desktop-only')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with hasAlignedText modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent: any = Bulma.withHelpersModifiers(Component);

        expect(
            shallow(<WithHelpersModifiersComponent hasAlignedText='l' className='custom' />)
                .hasClass('has-text-left')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasAlignedText='c' className='custom' />)
                .hasClass('has-text-centered')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasAlignedText='r' className='custom' />)
                .hasClass('has-text-right')
        ).toBe(true);

        expect(
            shallow(<WithHelpersModifiersComponent hasAlignedText='r,l' className='custom' />)
                .hasClass('has-text-right')
        ).toBe(false);
    });

    it('should render a Component with hasColor modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);

        expect(
            shallow(<WithHelpersModifiersComponent hasColor='white' className='custom' />)
                .hasClass('has-text-white')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='light' className='custom' />)
                .hasClass('has-text-light')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='dark' className='custom' />)
                .hasClass('has-text-dark')
        ).toBe(true);

        expect(
            shallow(<WithHelpersModifiersComponent hasColor='black' className='custom' />)
                .hasClass('has-text-black')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='primary' className='custom' />)
                .hasClass('has-text-primary')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='info' className='custom' />)
                .hasClass('has-text-info')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='success' className='custom' />)
                .hasClass('has-text-success')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='warning' className='custom' />)
                .hasClass('has-text-warning')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasColor='danger' className='custom' />)
                .hasClass('has-text-danger')
        ).toBe(true);
    });
});