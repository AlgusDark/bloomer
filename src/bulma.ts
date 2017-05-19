/// <reference types="react" />

import { Field } from './elements/Form/Field';
import { Control } from './elements/Form/Control';
import { Button } from './elements/Button';
import { PageLink } from './components/Pagination/PageLink';
import { PageControl } from './components/Pagination/PageControl';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tabs/Tab';
import { Container } from './layout/Container';

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
        isFullwidth?: boolean,
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

    export interface Modifiers extends
        Alignment,
        Size,
        FullWidth,
        State,
        Color {
    }

    // Renderable
    export interface Render {
        render?: Function
    }

    // Bulma Components Interfaces
    export interface BulmaComponents<T> extends
        Field<T>, Control<T>, Button<T>,
        PageLink<T>, PageControl<T>,
        Tabs<T>, Tab<T>,
        Container<T> {
    }

    // All Non HTML Props
    export interface NonHTMLProps<T> extends
        Modifiers, Render, BulmaComponents<T> {
    }
}

function getAlignmentClasses(props: Bulma.Alignment) {
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

function getSizeClasses(props: Bulma.Size) {
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

function getFullWidthClasses(props: Bulma.FullWidth) {
    return {
        'is-fullwidth': props.isFullwidth,
    }
}

export function removeFullWidthProps(props: Bulma.FullWidth) {
    const {
        isFullwidth,
        ...rest } = props;
    return rest;
}

function getStateClasses(props: Bulma.State) {
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

function getColorClasses(props: Bulma.Color) {
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

export function getModifiersClasses(props: Bulma.NonHTMLProps<HTMLElement>) {
    return {
        ...getAlignmentClasses(props),
        ...getSizeClasses(props),
        ...getFullWidthClasses(props),
        ...getStateClasses(props),
        ...getColorClasses(props),
    }
}