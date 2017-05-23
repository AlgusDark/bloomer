import * as React from 'react';
import * as classNames from 'classnames';

export const MenuList: React.SFC<React.HTMLProps<HTMLUListElement>> = (props) => {
    const className = classNames('menu-list', props.className);
    
    return (
        <ul {...props} className={className}>
            {props.children}
        </ul>
    )
}
