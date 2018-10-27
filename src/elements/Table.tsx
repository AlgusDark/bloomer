import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Table<T> extends React.HTMLProps<T> {
    isBordered?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
}

export function Table(props: Table<HTMLElement>) {
    const className = classNames(
        'table',
        {
            'is-bordered': props.isBordered,
            'is-narrow': props.isNarrow,
            'is-striped': props.isStriped,
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
        <table {...HTMLProps as React.Props<HTMLTableElement>} className={className} />
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(Table);
export default HOC;
