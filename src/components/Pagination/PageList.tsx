import * as React from 'react';
import * as classNames from 'classnames';

export const PageList = (props: React.HTMLProps<HTMLUListElement>) => {
    const className = classNames('pagination-list');

    return (
        <ul {...props} className={className}>
            {props.children}
        </ul>
    )
}
