import * as classes from 'classnames';

import { NonHTMLProps } from './interfaces';

export interface IProps extends NonHTMLProps, React.HTMLProps<HTMLElement> { }

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
        ...rest,
    } = props;

    return rest;
}