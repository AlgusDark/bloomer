import * as classes from 'classnames';

import { Bulma } from './bulma';
import { PageControlProps } from './components/Pagination/PageControl';

export interface IProps extends Bulma.NonHTMLProps<HTMLElement> { }

export function withModifiers(props: IProps, obj = {}) {
    return [
        {
            ...obj,
            'is-centered': props.isCentered,
            'is-right': props.isRight,
            'is-small': props.isSmall,
            'is-medium': props.isMedium,
            'is-large': props.isLarge,
            'is-boxed': props.isBoxed,
            'is-toggle': props.isToggle,
            'is-fullwidth': props.isFullwidth,
            'is-active': props.isActive,
            'is-current': props.isCurrent,
            'is-primary': props.isPrimary,
            'is-info': props.isInfo,
            'is-success': props.isSuccess,
            'is-warning': props.isWarning,
            'is-danger': props.isDanger,
            'is-hovered': props.isHovered,
            'is-focused': props.isFocused,
            'is-loading': props.isLoading,
            'is-link': props.isLink,
            'is-white': props.isWhite,
            'is-light': props.isLight,
            'is-dark': props.isDark,
            'is-black': props.isBlack,
            'is-grouped': props.isGrouped,
            'is-grouped-centered': props.isGroupedCentered,
            'is-grouped-right': props.isGroupedRight,
        },
        props.className
    ]
}

export function classNames(props: IProps, obj = {}): string | undefined {
    return classes(withModifiers(props, obj)) || undefined;
}

export function getHTMLProps(props: IProps): React.HTMLProps<HTMLElement> {
    const {
        render,
        isCentered,
        isRight,
        isSmall,
        isMedium,
        isLarge,
        isBoxed,
        isToggle,
        isFullwidth,
        isActive,
        isCurrent,
        isPrevious,
        isNext,
        isPrimary,
        isInfo,
        isSuccess,
        isWarning,
        isDanger,
        isHovered,
        isFocused,
        isLoading,
        isLink,
        isWhite,
        isLight,
        isDark,
        isBlack,
        isGrouped,
        isGroupedCentered,
        isGroupedRight,
        ...rest,
    } = props;

    return rest;
}