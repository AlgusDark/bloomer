/// <reference types="react" />
import * as React from 'react';
import * as classNames from 'classnames';

import { Grid } from './grid/grid';
import { combineModifiers, getHTMLProps, isBetween } from './helpers';

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

    export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

    export interface Heading {
        isHeading?: HeadingSize,
        isSize?: HeadingSize,
        isSpaced?: boolean,
        isParagraph?: boolean,
    }

    export interface Grid extends Grid.Size,
        Grid.Offset {

    }

    // 
    export type Platform = 'mobile' | 'm' | 'tablet' | 'tt' | 'touch' | 't' | 'desktop' | 'd' | 'widescreen' | 'w';
    export type PlatformOnly = 'tablet' | 'tt' | 'desktop' | 'd';

    export interface Show {
        isFlex?: boolean | Platform | Platform[],
        isFlexOnly?: PlatformOnly | PlatformOnly[],

        isBlock?: boolean | Platform | Platform[],
        isBlockOnly?: PlatformOnly | PlatformOnly[],

        isInline?: boolean | Platform | Platform[],
        isInlineOnly?: PlatformOnly | PlatformOnly[],

        isInlineBlock?: boolean | Platform | Platform[],
        isInlineBlockOnly?: PlatformOnly | PlatformOnly[],

        isInlineFlex?: boolean | Platform | Platform[],
        isInlineFlexOnly?: PlatformOnly | PlatformOnly[],
    }

    export interface Hide {
        isHidden?: boolean | Platform[],
        isHiddenOnly?: PlatformOnly | PlatformOnly[],
    }

    export interface Responsive extends Show, Hide {
    }

    export type Align = 'left' | 'l' | 'right' | 'r';

    export interface Helpers extends FullWidth, Responsive {
        isClearfix?: boolean,
        isPulled?: Align,

        isOverlay?: boolean,

        hasAlignedText?: Align | 'center' | 'centered' | 'c',

        isMarginless?: boolean,
        isPaddingless?: boolean,
        isUnselectable?: boolean,

        hasColor?: 'white' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger',
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

const isValidHeading = isBetween(1, 6);
export function getHeadingElement({ isHeading: heading }: Bulma.Heading, defaultHeading: Bulma.HeadingSize = 1) {
    return isValidHeading(heading) ? `h${heading}` : `h${defaultHeading}`
}

export function getHeadingModifiers({ isSpaced, isSize: size }: Bulma.Heading) {
    return {
        [`is-${size}`]: isValidHeading(size),
        'is-spaced': isSpaced,
    }
}

export function removeHeadingProps(props: Bulma.Heading) {
    const {
        isSize,
        isHeading,
        isSpaced,
        isParagraph,
        ...rest } = props;
    return rest;
}

const is = (options) => (str: string): boolean => options[str] || false;

const isMobile = is({ 'mobile': true, 'm': true, });
const isTablet = is({ 'tablet': true, 'tt': true, });
const isTouch = is({ 'touch': true, 't': true, });
const isDesktop = is({ 'desktop': true, 'd': true, });
const isWidescreen = is({ 'widescreen': true, 'w': true, });

const isLeft = is({ 'left': true, 'l': true, });
const isRight = is({ 'right': true, 'r': true, });
const isCentered = is({ 'center': true, 'centered': true, 'c': true });

const isColor = is({
    'white': true,
    'light': true,
    'dark': true,
    'black': true,
    'primary': true,
    'info': true,
    'success': true,
    'warning': true,
    'danger': true,
})

const reducerModifierOnly = (helper: string) => (init: object, option: string) => {
    if (isTablet(option)) return { ...init, [`is-${helper}-tablet-only`]: true };
    if (isDesktop(option)) return { ...init, [`is-${helper}-desktop-only`]: true };
    return init;
}

const reducerModifier = (helper: string) => (init: object, option: string) => {
    if (isMobile(option)) return { ...init, [`is-${helper}-mobile`]: true };
    if (isTablet(option)) return { ...init, [`is-${helper}-tablet`]: true };
    if (isTouch(option)) return { ...init, [`is-${helper}-touch`]: true };
    if (isDesktop(option)) return { ...init, [`is-${helper}-desktop`]: true };
    if (isWidescreen(option)) return { ...init, [`is-${helper}-widescreen`]: true };
    return init;
}

const getResponsiveModifiers = (modifier: boolean | Bulma.Platform | Bulma.Platform[], modifierOnly: Bulma.PlatformOnly | Bulma.PlatformOnly[], helper: string) => {
    if (typeof modifier === 'string') {
        const getModifier = reducerModifier(helper);
        return getModifier({}, modifier.toLowerCase().trim());
    }
    else if (Array.isArray(modifier)) {
        return modifier.map(str => str.toLowerCase().trim())
            .reduce(reducerModifier(helper), {})
    }
    else if (modifier === true) {
        return { [`is-${helper}`]: true }
    }

    if (typeof modifierOnly === 'string') {
        const getModifierOnly = reducerModifierOnly(helper)
        return getModifierOnly({}, modifierOnly.toLowerCase().trim());
    }
    else if(Array.isArray(modifierOnly)) {
        return modifierOnly.map(str => str.toLowerCase().trim())
            .reduce(reducerModifierOnly(helper), {})
    }

    return {};
}

const getAlignModifier = (modifier: string, helper: string) => {
    if (isLeft(modifier)) {
        return { [`${helper}-left`]: true }
    }
    else if (isRight(modifier)) {
        return { [`${helper}-right`]: true }
    }
    else if (isCentered(modifier)) {
        return { [`${helper}-centered`]: true }
    }
    return {};
}

const getColorModifier = (modifier: string) => {
    return isColor(modifier) ? { [`has-text-${modifier}`]: true } : {}
}

function getHelpersModifiers(
    {
        isFlex,
        isFlexOnly,
        isBlock,
        isBlockOnly,
        isInline,
        isInlineOnly,
        isInlineBlock,
        isInlineBlockOnly,
        isInlineFlex,
        isInlineFlexOnly,
        isHidden,
        isHiddenOnly,
        isPulled,
        hasAlignedText,
        isClearfix,
        isOverlay,
        isMarginless,
        isPaddingless,
        isUnselectable,
        hasColor,
    }: Bulma.Helpers) {
    return {
        ...getResponsiveModifiers(isFlex, isFlexOnly, 'flex'),
        ...getResponsiveModifiers(isBlock, isBlockOnly, 'block'),
        ...getResponsiveModifiers(isInline, isInlineOnly, 'inline'),
        ...getResponsiveModifiers(isInlineBlock, isInlineBlockOnly, 'inline-block'),
        ...getResponsiveModifiers(isInlineFlex, isInlineFlexOnly, 'inline-flex'),
        ...getResponsiveModifiers(isHidden, isHiddenOnly, 'hidden'),
        ...getAlignModifier(isPulled, 'is-pulled'),
        ...getAlignModifier(hasAlignedText, 'has-text'),
        ...getColorModifier(hasColor),
        'is-clearfix': isClearfix,
        'is-overlay': isOverlay,
        'is-marginless': isMarginless,
        'is-paddingless': isPaddingless,
        'is-unselectable': isUnselectable,
    }
}

function removeHelpersProps(props: Bulma.Helpers) {
    const {
        isFlex,
        isFlexOnly,
        isBlock,
        isBlockOnly,
        isInline,
        isInlineOnly,
        isInlineBlock,
        isInlineBlockOnly,
        isInlineFlex,
        isInlineFlexOnly,
        isHidden,
        isHiddenOnly,
        isClearfix,
        isPulled,
        isOverlay,
        hasAlignedText,
        isMarginless,
        isPaddingless,
        isUnselectable,
        hasColor,
        ...rest
    } = props;

    return rest;
}

export function withHelpersModifiers<T>(Component: Bulma.Component<T>): React.SFC<T & Bulma.Helpers> {
    const SFC: React.SFC<T & React.HTMLProps<HTMLElement>> = (props) => {
        const className = classNames(
            {
                ...combineModifiers(props, getHelpersModifiers, getFullWidthModifiers),
            },
            props.className,
        );

        // TODO: spread operator isn't fully supported (yet)
        // should refactor when this is fixed in another ts release 
        const rest: any = getHTMLProps(
            props,
            removeHelpersProps,
            removeFullWidthProps,
        );

        return className ? <Component {...rest} className={className} /> : <Component {...rest} />
    }

    return SFC;
}
