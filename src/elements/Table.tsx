import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Table<T> extends React.HTMLProps<T> {
    isBordered?: boolean,
    isStriped?: boolean,
    isNarrow?: boolean,
}

export function Table(props: Table<HTMLTableElement>) {
    const className = classNames(
        'table',
        {
            'is-bordered': props.isBordered,
            'is-striped': props.isStriped,
            'is-narrow': props.isNarrow,

        },
        props.className,
    );
    const {
        isBordered,
        isStriped,
        isNarrow,
        ...HTMLProps
    } = props;

    return (
        <table {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Table);