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
            isAlign: 'left'
        }
        expect(Bulma.removeAlignmentProps({ ...props, ...aligmentProps }))
            .toEqual(props);
    });

    it('should remove Size props', () => {
        const sizeProps: any = {
            isSize: 'large',
        }
        expect(Bulma.removeSizeProps({ ...props, ...sizeProps }))
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

    it('should remove Active props', () => {
        const stateProps = {
            isActive: true,
        }
        expect(Bulma.removeActiveModifiers({ ...props, ...stateProps }))
            .toEqual(props);
    });

    it('should remove Hovered props', () => {
        const stateProps = {
            isHovered: true,
        }
        expect(Bulma.removeHoveredModifiers({ ...props, ...stateProps }))
            .toEqual(props);
    });

    it('should remove Focused props', () => {
        const stateProps = {
            isFocused: true,
        }
        expect(Bulma.removeFocusedModifiers({ ...props, ...stateProps }))
            .toEqual(props);
    });

    it('should remove Color props', () => {
        const colorProps: any = {
            isColor: 'white',
        }
        expect(Bulma.removeColorProps({ ...props, ...colorProps }))
            .toEqual(props);
    });

    it('should remove Heading props', () => {
        const HeadingProps: Bulma.Bulma.Heading = {
            isSize: 2,
            isSpaced: true,
        }
        expect(Bulma.removeHeadingProps({ ...props, ...HeadingProps }))
            .toEqual(props);
    });
});

describe('get*Modifiers functions', () => {
    it('should getAlignmentModifiers', () => {
        const props = {
            isAlign: 'left',
        }
        const expected = {
            'is-left': true,
        }
        expect(Bulma.getAlignmentModifiers(props))
            .toEqual(expected);
    });

    it('should getSizeModifiers', () => {
        const props: any = {
            isSize: 'medium',
        }
        const expected = {
            'is-medium': true,
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
        const props: any = {
            isColor: 'success',
        }
        const expected = {
            'is-success': true,
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
        const renderedComponent = <WithHelpersModifiersComponent isColor='black' className='custom' />
        expect(shallow(renderedComponent).contains(<Component isColor='black' className='custom' />)).toBe(true);
    });

    it('should render a Component with className from Helpers without passing Helpers Props', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement> & Bulma.Bulma.Modifiers> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isColor='black' isFullWidth className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isColor')).toBe('black');
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
        const renderedComponent = <WithHelpersModifiersComponent isDisplay='flex' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isDisplay')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with isDisplay with Object Array', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isDisplay={{flex: ['default', 'mobile']}} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isDisplay')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-mobile')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with isDisplay with Object String', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isDisplay={{flex: 'default', block: ['default', 'tablet-only']}} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        console.log(shallowedComponent.debug());

        expect(shallowedComponent.prop('isDisplay')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex')).toBe(true);
        expect(shallowedComponent.hasClass('is-block')).toBe(true);
        expect(shallowedComponent.hasClass('is-block-tablet-only')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isDisplay={['block-mobile', 'flex-desktop-only', 'flex']} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isDisplay')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-block-mobile')).toBe(true);
        expect(shallowedComponent.hasClass('is-flex-desktop-only')).toBe(true);
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
        const renderedComponent = <WithHelpersModifiersComponent isDisplay={
            {flex: 'mobile', lol:false}
        } className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isDisplay')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-flex-mobile')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isHidden className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isHidden')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-hidden')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isHidden={['desktop-only', 'touch']} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isHidden')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-hidden-desktop-only')).toBe(true);
        expect(shallowedComponent.hasClass('is-hidden-touch')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isHidden={['desktop-only', 'lol']} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isHidden')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-hidden-desktop-only')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isHidden='mobile' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isHidden')).toBe(undefined);
        expect(shallowedComponent.hasClass('is-hidden-mobile')).toBe(true);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isHidden='lol' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isHidden')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with flex modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isHidden={false} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isHidden')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component without isFlex prop when someone provides bad data', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent: any = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isDisplay='none' className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isFlex')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component withouth errors when passing bad data to isFlex', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent: any = Bulma.withHelpersModifiers(Component);
        const renderedComponent = <WithHelpersModifiersComponent isDisplay={1} className='custom' />
        const shallowedComponent = shallow(renderedComponent);

        expect(shallowedComponent.prop('isDisplay')).toBe(undefined);
        expect(shallowedComponent.hasClass('custom')).toBe(true);
    });

    it('should render a Component with hasTextAlign modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent: any = Bulma.withHelpersModifiers(Component);

        expect(
            shallow(<WithHelpersModifiersComponent hasTextAlign='left' className='custom' />)
                .hasClass('has-text-left')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextAlign='centered' className='custom' />)
                .hasClass('has-text-centered')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextAlign='right' className='custom' />)
                .hasClass('has-text-right')
        ).toBe(true);

        expect(
            shallow(<WithHelpersModifiersComponent hasTextAlign='right,left' className='custom' />)
                .hasClass('has-text-right')
        ).toBe(false);
    });

    it('should render a Component with hasTextColor modifiers', () => {
        const Component: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
            return (
                <div>Hello World</div>
            )
        }
        const WithHelpersModifiersComponent = Bulma.withHelpersModifiers(Component);

        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='white' className='custom' />)
                .hasClass('has-text-white')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='light' className='custom' />)
                .hasClass('has-text-light')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='dark' className='custom' />)
                .hasClass('has-text-dark')
        ).toBe(true);

        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='black' className='custom' />)
                .hasClass('has-text-black')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='primary' className='custom' />)
                .hasClass('has-text-primary')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='info' className='custom' />)
                .hasClass('has-text-info')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='success' className='custom' />)
                .hasClass('has-text-success')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='warning' className='custom' />)
                .hasClass('has-text-warning')
        ).toBe(true);
        expect(
            shallow(<WithHelpersModifiersComponent hasTextColor='danger' className='custom' />)
                .hasClass('has-text-danger')
        ).toBe(true);
    });
});