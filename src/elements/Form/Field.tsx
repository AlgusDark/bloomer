import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Field<T> extends React.HTMLProps<T> {
    isGrouped?: boolean,
    isGroupedRight?: boolean,
    isGroupedCentered?: boolean,
}

export const Field: React.SFC<Field<HTMLDivElement>> = (props) => {
    const className = classNames(
        'field',
        {
            'is-grouped': props.isGrouped,
            'is-grouped-right': props.isGroupedRight,
            'is-grouped-centered': props.isGroupedCentered,
        },
        props.className);
    const {
        isGrouped,
        isGroupedRight,
        isGroupedCentered,
        ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Field);