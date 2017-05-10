/// <reference types="react" />

import { Field, getFieldClasses } from './elements/Form/Field';
import { Control, getControlClasses } from './elements/Form/Control';
import { Button, getButtonClasses } from './elements/Button';
import { PageLink, getPageLinkClasses } from './components/Pagination/PageLink';
import { PageControl } from './components/Pagination/PageControl';
import { Tabs, getTabsClasses } from './components/Tabs';
import { Tab } from './components/Tabs/Tab';

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
        Tabs<T>, Tab<T> {
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

function getSizeClasses(props: Bulma.Size) {
    return {
        'is-small': props.isSmall,
        'is-medium': props.isMedium,
        'is-large': props.isLarge,
    }
}

function getFullWidthClasses(props: Bulma.FullWidth) {
    return {
        'is-fullwidth': props.isFullwidth,
    }
}

function getStateClasses(props: Bulma.State) {
    return {
        'is-active': props.isActive,
        'is-focused': props.isFocused,
        'is-hovered': props.isHovered,
        'is-loading': props.isLoading,
    }
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

export function getModifiersClasses(props: Bulma.NonHTMLProps<HTMLElement>) {
    return {
        ...getAlignmentClasses(props),
        ...getSizeClasses(props),
        ...getFullWidthClasses(props),
        ...getStateClasses(props),
        ...getColorClasses(props),
    }
}

export function getBulmaClasses(props) {
    return {
        ...getFieldClasses(props),
        ...getControlClasses(props),
        ...getButtonClasses(props),
        ...getPageLinkClasses(props),
    }
}