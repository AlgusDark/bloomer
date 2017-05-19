import * as React from 'react';
import { classNames } from './../../helpers';

export interface Container<T> extends React.HTMLProps<T> {
    isFluid?: boolean,
}

export const Container = (props: Container<HTMLDivElement>) => {
    const className = classNames(props, {
        container: true,
        'is-fluid': props.isFluid,
    });
    const { isFluid, ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}