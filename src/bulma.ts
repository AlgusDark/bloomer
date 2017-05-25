/// <reference types="react" />

import { Grid } from './grid/grid';

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

    export interface Grid extends Grid.HorizontalSize,
        Grid.Size,
        Grid.Offset,
        Grid.Mobile,
        Grid.Tablet,
        Grid.Desktop {

    }

    export interface Modifiers extends
        Alignment,
        Size,
        FullWidth,
        State,
        Color,
        Grid {
    }

    // Renderable
    export interface Render {
        render?: Function
    }

    // All Non HTML Props
    export interface NonHTMLProps<T> extends
        Modifiers, Render {
    }
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

export function getFullWidthModifiers(props: Bulma.FullWidth) {
    return {
        'is-fullwidth': props.isFullWidth,
    }
}

export function removeFullWidthProps(props: Bulma.FullWidth) {
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
        'is-loading': props.isLoading,
    }
}

export function removeStateProps(props: Bulma.State) {
    const {
        isActive,
        isFocused,
        isHovered,
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