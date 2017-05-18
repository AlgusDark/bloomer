import * as React from 'react';
import * as classNames from 'classnames';

export const Menu = (props: React.HTMLProps<HTMLElement>) => {
    const className = classNames('menu', props.className);

    return (
        <aside {...props} className={className}>
            {props.children}
        </aside>
    )
}
