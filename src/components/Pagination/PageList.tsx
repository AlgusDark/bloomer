import * as React from 'react';
import * as classNames from 'classnames';

export const PageList: React.SFC<React.HTMLProps<HTMLUListElement>> = (props) => {
    const className = classNames('pagination-list', props.className);

    return (
        <ul {...props} className={className}>
            {props.children}
        </ul>
    )
}
