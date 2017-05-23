import * as React from 'react';
import * as classNames from 'classnames';

export interface Container<T> extends React.HTMLProps<T> {
    isFluid?: boolean,
}

export const Container: React.SFC<Container<HTMLDivElement>> = (props) => {
    const className = classNames(
        'container',
        {
            'is-fluid': props.isFluid,
        },
        props.className,
    );

    const { isFluid, ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}