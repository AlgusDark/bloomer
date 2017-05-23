import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export interface Field<T> extends React.HTMLProps<T> {
    isGrouped?: boolean,
    isGroupedRight?: boolean,
    isGroupedCentered?: boolean,
}

export const Field: React.SFC<Field<HTMLDivElement>> = (props) => {
    const className = classNames(props, {
        field: true,
        'is-grouped': props.isGrouped,
        'is-grouped-centered': props.isGroupedCentered,
        'is-grouped-right': props.isGroupedRight,
    });
    const {
        isGrouped,
        isGroupedRight,
        isGroupedCentered,
        ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}