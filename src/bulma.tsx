/// <reference types="react" />
import * as React from 'react';
import * as classNames from 'classnames';

import { Grid } from './grid/grid';
import { combineModifiers, getHTMLProps } from './helpers';

export declare namespace Bulma {
    // Modifiers
    export interface Alignment {
        isCentered?: boolean,
        isRight?: boolean,
    }

    export interface Size {
        isSmall?: boolean,
        isMedium?: boolean,
        isLarge?: boolean,
    }

    export interface FullWidth {
        isFullWidth?: boolean,
    }

    export interface State {
        isActive?: boolean,
        isHovered?: boolean,
        isFocused?: boolean,
    }

    export interface Loading {
        isLoading?: boolean,
    }

    export interface Color {
        isWhite?: boolean,
        isLight?: boolean,
        isDark?: boolean,
        isBlack?: boolean,
        isPrimary?: boolean,
        isInfo?: boolean,
        isSuccess?: boolean,
        isWarning?: boolean,
        isDanger?: boolean,
    }

    export interface Headings {
        is1?: boolean,
        is2?: boolean,
        is3?: boolean,
        is4?: boolean,
        is5?: boolean,
        is6?: boolean,
        isSpaced?: boolean,
    }

    export interface Grid extends Grid.HorizontalSize,
        Grid.Size,
        Grid.Offset,
        Grid.Mobile,
        Grid.Tablet,
        Grid.Desktop {

    }

    export interface Show {
        isFlexMobile?: boolean,
        isFlexTabletOnly?: boolean,
        isFlexDesktopOnly?: boolean,
        isFlexWidescreen?: boolean,
        isFlexTouch?: boolean,
        isFlexTablet?: boolean,
        isFlexDesktop?: boolean,

        isBlockMobile?: boolean,
        isBlockTabletOnly?: boolean,
        isBlockDesktopOnly?: boolean,
        isBlockWidescreen?: boolean,
        isBlockTouch?: boolean,
        isBlockTablet?: boolean,
        isBlockDesktop?: boolean,

        isInlineMobile?: boolean,
        isInlineTabletOnly?: boolean,
        isInlineDesktopOnly?: boolean,
        isInlineWidescreen?: boolean,
        isInlineTouch?: boolean,
        isInlineTablet?: boolean,
        isInlineDesktop?: boolean,

        isInlineBlockMobile?: boolean,
        isInlineBlockTabletOnly?: boolean,
        isInlineBlockDesktopOnly?: boolean,
        isInlineBlockWidescreen?: boolean,
        isInlineBlockTouch?: boolean,
        isInlineBlockTablet?: boolean,
        isInlineBlockDesktop?: boolean,

        isInlineFlexMobile?: boolean,
        isInlineFlexTabletOnly?: boolean,
        isInlineFlexDesktopOnly?: boolean,
        isInlineFlexWidescreen?: boolean,
        isInlineFlexTouch?: boolean,
        isInlineFlexTablet?: boolean,
        isInlineFlexDesktop?: boolean,
    }

    export interface Hide {
        isHiddenMobile?: boolean,
        isHiddenTabletOnly?: boolean,
        isHiddenDesktopOnly?: boolean,
        isHiddenWidescreen?: boolean,
        isHiddenTouch?: boolean,
        isHiddenTablet?: boolean,
        isHiddenDesktop?: boolean,
    }

    export interface Responsive extends Show, Hide {
    }

    export interface Helpers extends FullWidth, Responsive {
        isFlex?: boolean,
        isBlock?: boolean,
        isInline?: boolean,
        isInlineBlock?: boolean,
        isInlineFlex?: boolean,

        isClearfix?: boolean,
        isPulledLeft?: boolean,
        isPulledRight?: boolean,

        isOverlay?: boolean,

        hasTextCentered?: boolean,
        hasTextLeft?: boolean,
        hasTextRigh?: boolean,

        isMarginless?: boolean,
        isPaddingless?: boolean,
        isUnselectable?: boolean,
    }

    export interface Modifiers extends
        Alignment,
        Size,
        FullWidth,
        State,
        Color,
        Grid,
        Helpers {
    }

    // Renderable
    export interface Render {
        render?: Function
    }

    // All Non HTML Props
    export interface NonHTMLProps extends
        Modifiers, Render {
    }

    export type Component<T> = React.ComponentClass<T & React.HTMLProps<HTMLElement>> | React.SFC<T & React.HTMLProps<HTMLElement>>;
}

export function getAlignmentModifiers(props: Bulma.Alignment) {
    return {
        'is-centered': props.isCentered,
        'is-right': props.isRight,
    }
}

export function removeAlignmentProps(props: Bulma.Alignment) {
    const {
        isCentered,
        isRight,
        ...rest } = props;
    return rest;
}

export function getSizeModifiers(props: Bulma.Size) {
    return {
        'is-small': props.isSmall,
        'is-medium': props.isMedium,
        'is-large': props.isLarge,
    }
}

export function removeSizeProps(props: Bulma.Size) {
    const {
        isLarge,
        isMedium,
        isSmall,
        ...rest } = props;
    return rest;
}

function getFullWidthModifiers(props: Bulma.FullWidth) {
    return {
        'is-fullwidth': props.isFullWidth,
    }
}

function removeFullWidthProps(props: Bulma.FullWidth) {
    const {
        isFullWidth,
        ...rest } = props;
    return rest;
}

export function getStateModifiers(props: Bulma.State) {
    return {
        'is-active': props.isActive,
        'is-focused': props.isFocused,
        'is-hovered': props.isHovered,
    }
}

export function removeStateProps(props: Bulma.State) {
    const {
        isActive,
        isFocused,
        isHovered,
        ...rest } = props;
    return rest;
}

export function getLoadingModifiers(props: Bulma.Loading) {
    return {
        'is-loading': props.isLoading,
    }
}

export function removeLoadingProps(props: Bulma.Loading) {
    const {
        isLoading,
        ...rest } = props;
    return rest;
}

export function getColorModifiers(props: Bulma.Color) {
    return {
        'is-white': props.isWhite,
        'is-light': props.isLight,
        'is-dark': props.isDark,
        'is-black': props.isBlack,
        'is-primary': props.isPrimary,
        'is-info': props.isInfo,
        'is-success': props.isSuccess,
        'is-warning': props.isWarning,
        'is-danger': props.isDanger,
    }
}

export function removeColorProps(props: Bulma.Color) {
    const {
        isBlack,
        isDanger,
        isDark,
        isInfo,
        isLight,
        isPrimary,
        isSuccess,
        isWarning,
        isWhite,
        ...rest } = props;
    return rest;
}

export function getHeadingElement(props: Bulma.Headings) {
    let element = 'h1';

    if (props.is1) {
        element = 'h1';
    }
    else if (props.is2) {
        element = 'h2';
    }
    else if (props.is3) {
        element = 'h3';
    }
    else if (props.is4) {
        element = 'h4';
    }
    else if (props.is5) {
        element = 'h5';
    }
    else if (props.is6) {
        element = 'h6';
    }

    return element;
}

export function getHeadingModifiers(props: Bulma.Headings) {
    return {
        'is-1': props.is1,
        'is-2': props.is2,
        'is-3': props.is3,
        'is-4': props.is4,
        'is-5': props.is5,
        'is-6': props.is6,
        'is-spaced': props.isSpaced,
    }
}

export function removeHeadingProps(props: Bulma.Headings) {
    const {
        is1,
        is2,
        is3,
        is4,
        is5,
        is6,
        isSpaced,
        ...rest } = props;
    return rest;
}

function getHelpersModifiers(props: Bulma.Helpers) {
    return {
        'is-flex': props.isFlex,
        'is-block': props.isBlock,
        'is-inline': props.isInline,
        'is-inline-block': props.isInlineBlock,
        'is-inline-flex': props.isInlineFlex,

        'is-flex-mobile': props.isFlexMobile,
        'is-flex-tablet-only': props.isFlexTabletOnly,
        'is-flex-desktop-only': props.isFlexDesktopOnly,
        'is-flex-widescreen': props.isFlexWidescreen,
        'is-flex-touch': props.isFlexTouch,
        'is-flex-tablet': props.isFlexTablet,
        'is-flex-desktop': props.isFlexDesktop,

        'is-block-mobile': props.isBlockMobile,
        'is-block-tablet-only': props.isBlockTabletOnly,
        'is-block-desktop-only': props.isBlockDesktopOnly,
        'is-block-widescreen': props.isBlockWidescreen,
        'is-block-touch': props.isBlockTouch,
        'is-block-tablet': props.isBlockTablet,
        'is-block-desktop': props.isBlockDesktop,

        'is-inline-mobile': props.isInlineMobile,
        'is-inline-tablet-only': props.isInlineTabletOnly,
        'is-inline-desktop-only': props.isInlineDesktopOnly,
        'is-inline-widescreen': props.isInlineWidescreen,
        'is-inline-touch': props.isInlineTouch,
        'is-inline-tablet': props.isInlineTablet,
        'is-inline-desktop': props.isInlineDesktop,

        'is-inline-block-mobile': props.isInlineBlockMobile,
        'is-inline-block-tablet-only': props.isInlineBlockTabletOnly,
        'is-inline-block-desktop-only': props.isInlineBlockDesktopOnly,
        'is-inline-block-widescreen': props.isInlineBlockWidescreen,
        'is-inline-block-touch': props.isInlineBlockTouch,
        'is-inline-block-tablet': props.isInlineBlockTablet,
        'is-inline-block-desktop': props.isInlineBlockDesktop,

        'is-inline-flex-mobile': props.isInlineFlexMobile,
        'is-inline-flex-tablet-only': props.isInlineFlexTabletOnly,
        'is-inline-flex-desktop-only': props.isInlineFlexDesktopOnly,
        'is-inline-flex-widescreen': props.isInlineFlexWidescreen,
        'is-inline-flex-touch': props.isInlineFlexTouch,
        'is-inline-flex-tablet': props.isInlineFlexTablet,
        'is-inline-flex-desktop': props.isInlineFlexDesktop,

        'is-hidden-mobile': props.isHiddenMobile,
        'is-hidden-tablet-only': props.isHiddenTabletOnly,
        'is-hidden-desktop-only': props.isHiddenDesktopOnly,
        'is-hidden-widescreen': props.isHiddenWidescreen,
        'is-hidden-touch': props.isHiddenTouch,
        'is-hidden-tablet': props.isHiddenTablet,
        'is-hidden-desktop': props.isHiddenDesktop,

        'is-clearfix': props.isClearfix,
        'is-pulled-left': props.isPulledLeft,
        'is-pulled-right': props.isPulledRight,

        'is-overlay': props.isOverlay,

        'has-text-centered': props.hasTextCentered,
        'has-text-left': props.hasTextLeft,
        'has-text-righ': props.hasTextRigh,

        'is-marginless': props.isMarginless,
        'is-paddingless': props.isPaddingless,
        'is-unselectable': props.isUnselectable,
    }
}

function removeHelpersProps(props: Bulma.Helpers) {
    const {
        isFlex,
        isBlock,
        isInline,
        isInlineBlock,
        isInlineFlex,
        isFlexMobile,
        isFlexTabletOnly,
        isFlexDesktopOnly,
        isFlexWidescreen,
        isFlexTouch,
        isFlexTablet,
        isFlexDesktop,
        isBlockMobile,
        isBlockTabletOnly,
        isBlockDesktopOnly,
        isBlockWidescreen,
        isBlockTouch,
        isBlockTablet,
        isBlockDesktop,
        isInlineMobile,
        isInlineTabletOnly,
        isInlineDesktopOnly,
        isInlineWidescreen,
        isInlineTouch,
        isInlineTablet,
        isInlineDesktop,
        isInlineBlockMobile,
        isInlineBlockTabletOnly,
        isInlineBlockDesktopOnly,
        isInlineBlockWidescreen,
        isInlineBlockTouch,
        isInlineBlockTablet,
        isInlineBlockDesktop,
        isInlineFlexMobile,
        isInlineFlexTabletOnly,
        isInlineFlexDesktopOnly,
        isInlineFlexWidescreen,
        isInlineFlexTouch,
        isInlineFlexTablet,
        isInlineFlexDesktop,
        isHiddenMobile,
        isHiddenTabletOnly,
        isHiddenDesktopOnly,
        isHiddenWidescreen,
        isHiddenTouch,
        isHiddenTablet,
        isHiddenDesktop,
        isClearfix,
        isPulledLeft,
        isPulledRight,
        isOverlay,
        hasTextCentered,
        hasTextLeft,
        hasTextRigh,
        isMarginless,
        isPaddingless,
        isUnselectable,
        ...rest
    } = props;

    return rest;
}

export function withHelpersModifiers<T>(Component: Bulma.Component<T>): React.ComponentClass<T & Bulma.Helpers> {
    return class extends React.Component<T & React.HTMLProps<T>, void> {
        render() {
            const className = classNames(
                {
                    ...combineModifiers(this.props, getHelpersModifiers, getFullWidthModifiers),
                },
                this.props.className,
            );

            // TODO
            // Without "as any", this gives me the error:
            const props: any = getHTMLProps(
                this.props,
                removeHelpersProps,
                removeFullWidthProps,
            );
            return className ? <Component {...props} className={className} /> : <Component {...props} />
        }
    }
}
