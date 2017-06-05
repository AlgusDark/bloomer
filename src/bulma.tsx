/// <reference types="react" />
import * as React from 'react';
import * as classNames from 'classnames';

import { Grid } from './grid/grid';
import { combineModifiers, getHTMLProps, isBetween, is, isOption } from './helpers';

export declare namespace Bulma {
    // Modifiers
    export interface Alignment {
        isAlign?: string
    }

    export type Sizes = 'large' | 'medium' | 'small';
    export interface Size {
        isSize?: Sizes,
    }

    export interface FullWidth {
        isFullWidth?: boolean,
    }

    export interface Active {
        isActive?: boolean,
    }

    export interface Hovered {
        isHovered?: boolean,
    }

    export interface Focused {
        isFocused?: boolean,
    }

    export interface State extends Active, Hovered, Focused {
    }

    export interface Loading {
        isLoading?: boolean,
    }

    export type Colors = 'white' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
    export interface Color {
        isColor?: Colors,
    }

    export type HeadingSizes = 1 | 2 | 3 | 4 | 5 | 6;

    export interface Heading {
        isHeading?: HeadingSizes,
        isSize?: HeadingSizes,
        isSpaced?: boolean,
        isParagraph?: boolean,
    }

    export interface Grid extends Grid.HorizontalSize, Grid.Size, Grid.Offset {
    }

    export type Platform = 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen';
    export type PlatformOnly = 'tablet' | 'desktop';

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
        isHidden?: boolean | Platform | Platform[],
        isHiddenOnly?: PlatformOnly | PlatformOnly[],
    }

    export interface Responsive extends Show, Hide {
    }

    export type Alignments = 'left' | 'right';

    export interface Helpers extends FullWidth, Responsive {
        isClearfix?: boolean,
        isPulled?: Alignments,

        isOverlay?: boolean,

        isMarginless?: boolean,
        isPaddingless?: boolean,
        isUnselectable?: boolean,

        hasTextAlign?: Alignments | 'centered',
        hasTextColor?: Colors,
    }

    export interface Modifiers extends
        Alignment,
        Size,
        FullWidth,
        State,
        Color,
        Helpers {
    }

    export interface Render {
        render?: Function
    }

    export interface NonHTMLProps extends
        Modifiers, Render {
    }

    export type Component<T> = React.ComponentClass<T & React.HTMLProps<HTMLElement>> | React.SFC<T & React.HTMLProps<HTMLElement>>;
}

export const isMobile = is({ 'mobile': true, });
export const isTablet = is({ 'tablet': true, });
export const isTouch = is({ 'touch': true, });
export const isDesktop = is({ 'desktop': true, });
export const isWidescreen = is({ 'widescreen': true, });

export const isLeft = is({ 'left': true, });
export const isRight = is({ 'right': true, });
export const isCentered = is({ 'centered': true, });

export const isCenter = is({ 'center': true, });
export const isFullWidth = is({ 'fullwidth': true, });

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
});

export const isSmall = is({ 'small': true, });
export const isMedium = is({ 'medium': true, });
export const isLarge = is({ 'large': true, });

const isPlatform = isOption(isMobile, isTablet, isDesktop, isTouch, isWidescreen);
const isAlign = isOption(isLeft, isCentered, isRight);
const isSize = isOption(isSmall, isMedium, isLarge);

export function getAlignmentModifiers({ isAlign: align }: Bulma.Alignment) {
    return isAlign(align) ? { [`is-${align}`]: true } : {};
}

export function removeAlignmentProps(props: Bulma.Alignment) {
    const {
        isAlign,
        ...rest } = props;
    return rest;
}

export function getSizeModifiers({ isSize: size }: Bulma.Size) {
    return isSize(size) ? { [`is-${size}`]: true } : {};
}

export function removeSizeProps(props: Bulma.Size) {
    const {
        isSize,
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

export function getActiveModifiers(props: Bulma.Active) {
    return { 'is-active': props.isActive };
}

export function removeActiveModifiers(props: Bulma.Active) {
    const { isActive, ...rest } = props;
    return rest;
}

export function getFocusedModifiers(props: Bulma.Focused) {
    return { 'is-focused': props.isFocused };
}

export function removeFocusedModifiers(props: Bulma.Focused) {
    const { isFocused, ...rest } = props;
    return rest;
}

export function getHoveredModifiers(props: Bulma.Hovered) {
    return { 'is-hovered': props.isHovered };
}

export function removeHoveredModifiers(props: Bulma.Hovered) {
    const { isHovered, ...rest } = props;
    return rest;
}

export function getStateModifiers(props: Bulma.State) {
    return {
        ...getActiveModifiers(props),
        ...getFocusedModifiers(props),
        ...getHoveredModifiers(props),
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

export function getColorModifiers({ isColor: color }: Bulma.Color) {
    return isColor(color) ? { [`is-${color}`]: true } : {}
}

export function removeColorProps(props: Bulma.Color) {
    const {
        isColor,
        ...rest } = props;
    return rest;
}

const isValidHeading = isBetween(1, 6);

export function getHeadingElement({ isHeading: heading }: Bulma.Heading, defaultHeading: Bulma.HeadingSizes = 1) {
    return isValidHeading(heading) ? `h${heading}` : `h${defaultHeading}`
}

export function getHeadingModifiers({ isSpaced, isSize: size }: Bulma.Heading) {
    const isSize = isValidHeading(size) ? { [`is-${size}`]: true } : {};
    
    return {
        ...isSize,
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

const reducerModifierOnly = (helper: string) => (init: object, option: string) => {
    if (isOption(isTablet, isDesktop)(option)) return { ...init, [`is-${helper}-${option}-only`]: true };
    return init;
}

const reducerModifier = (helper: string) => (init: object, option: string) => {
    if (isPlatform(option)) return { ...init, [`is-${helper}-${option}`]: true };
    return init;
}

const getResponsiveModifierFactory = (modifier, helper, reducer) => {
    if (typeof modifier === 'string') {
        const getModifier = reducer(helper);
        return getModifier({}, modifier.toLowerCase().trim());
    }
    else if (Array.isArray(modifier)) {
        return modifier.map(str => str.toLowerCase().trim())
            .reduce(reducer(helper), {})
    }
    else if (modifier === true) {
        return { [`is-${helper}`]: true }
    }

    return {};
}

const getResponsiveModifiers = (modifier: boolean | Bulma.Platform | Bulma.Platform[], modifierOnly: Bulma.PlatformOnly | Bulma.PlatformOnly[], helper: string) => {
    if (modifier) return getResponsiveModifierFactory(modifier, helper, reducerModifier);
    if (modifierOnly) return getResponsiveModifierFactory(modifierOnly, helper, reducerModifierOnly);

    return {};
}

const getAlignModifier = (modifier: string, helper: string) => {
    return isAlign(modifier) ? { [`${helper}-${modifier}`]: true } : {};
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
        isClearfix,
        isOverlay,
        isMarginless,
        isPaddingless,
        isUnselectable,
        hasTextAlign,
        hasTextColor,
    }: Bulma.Helpers) {
    return {
        ...getResponsiveModifiers(isFlex, isFlexOnly, 'flex'),
        ...getResponsiveModifiers(isBlock, isBlockOnly, 'block'),
        ...getResponsiveModifiers(isInline, isInlineOnly, 'inline'),
        ...getResponsiveModifiers(isInlineBlock, isInlineBlockOnly, 'inline-block'),
        ...getResponsiveModifiers(isInlineFlex, isInlineFlexOnly, 'inline-flex'),
        ...getResponsiveModifiers(isHidden, isHiddenOnly, 'hidden'),
        ...getAlignModifier(isPulled, 'is-pulled'),
        ...getAlignModifier(hasTextAlign, 'has-text'),
        ...getColorModifier(hasTextColor),
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
        isMarginless,
        isPaddingless,
        isUnselectable,
        hasTextAlign,
        hasTextColor,
        ...rest
    } = props;

    return rest;
}

export function withHelpersModifiers<T>(Component: Bulma.Component<T>) {
    const SFC: React.SFC<T & React.HTMLProps<HTMLElement> & Bulma.Helpers> = (props) => {
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
