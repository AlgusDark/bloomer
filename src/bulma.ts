/// <reference types="react" />

export declare namespace Bulma {
    // Modifiers
    export interface Alignment<T> extends React.HTMLProps<T> {
        isCentered?: boolean,
        isRight?: boolean,
    }

    export interface Sizes<T> extends React.HTMLProps<T> {
        isSmall?: boolean,
        isMedium?: boolean,
        isLarge?: boolean,
    }

    export interface Style<T> extends React.HTMLProps<T> {
        isBoxed?: boolean,
        isToggle?: boolean,
        isFullwidth?: boolean,
        isOutlined?: boolean,
        isInverted?: boolean,
    }

    export interface State<T> extends React.HTMLProps<T> {
        isActive?: boolean,
        isHovered?: boolean,
        isFocused?: boolean,
        isLoading?: boolean,
        isLink?: boolean,
    }

    export interface Colors<T> extends React.HTMLProps<T> {
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

    export interface Modifiers<T> extends
        Alignment<T>,
        Sizes<T>,
        Style<T>,
        State<T>,
        Colors<T>,
        React.HTMLProps<T> {
    }

    export interface Render<T> extends React.HTMLProps<T> {
        render?: Function
    }

    // Components
    export interface Field<T> extends React.HTMLProps<T> {
        isGrouped?: boolean,
        isGroupedRight?: boolean,
        isGroupedCentered?: boolean,
    }

    export interface PageControl<T> extends React.HTMLProps<T> {
        isPrevious?: boolean,
        isNext?: boolean,
    }

    export interface PageLink<T> extends React.HTMLProps<T> {
        isCurrent?: boolean,
    }

    export interface NonHTMLProps<T> extends
        Modifiers<T>, Render<T>,
        Field<T>, PageControl<T>,
        PageLink<T> {
    }
}