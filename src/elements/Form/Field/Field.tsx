import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    isRight, isCentered, isFullWidth,
    withHelpersModifiers,
} from './../../../bulma';

import { isOption } from './../../../helpers'

export type Directions = 'right' | 'centered';

export interface Field<T> extends React.HTMLProps<T> {
    isGrouped?: boolean | Directions,
    hasAddons?: boolean | Directions | 'fullwidth',
    isHorizontal?: boolean,
}

const getModifier = (modifier: boolean | Directions | 'fullwidth', helper: string, isDirection: Function): object => {
    if (modifier === true) {
        return { [`${helper}`]: true }
    }
    else if (typeof modifier === 'string') {
        return isDirection(modifier) ? { [`${helper} ${helper}-${modifier}`]: true } : {};
    }

    return {};
}

export const Field: React.SFC<Field<HTMLDivElement>> = (props) => {
    const className = classNames(
        'field',
        {
            ...getModifier(props.isGrouped, 'is-grouped', isOption(isRight, isCentered)),
            ...getModifier(props.hasAddons, 'has-addons', isOption(isRight, isCentered, isFullWidth)),
            'is-horizontal': props.isHorizontal,
        },
        props.className);
    const {
        isGrouped,
        hasAddons,
        isHorizontal,
        ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Field);