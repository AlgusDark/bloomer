import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export interface Field<T> extends React.HTMLProps<T> {
    isGrouped?: boolean,
    isGroupedRight?: boolean,
    isGroupedCentered?: boolean,
}

export function getFieldClasses(props: Field<HTMLDivElement>) {
    return {
        'is-grouped': props.isGrouped,
        'is-grouped-centered': props.isGroupedCentered,
        'is-grouped-right': props.isGroupedRight,
    }
}

export const Field = (props: Field<HTMLDivElement>) => {
    const className = classNames(props, { field: true });
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