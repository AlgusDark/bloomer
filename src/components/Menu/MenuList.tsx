import * as React from 'react';
import * as classNames from 'classnames';

export const MenuList = (props: React.HTMLProps<HTMLUListElement>) => {
    const className = classNames('menu-list');
    
    return (
        <ul {...props} className={className}>
            {props.children}
        </ul>
    )
}
