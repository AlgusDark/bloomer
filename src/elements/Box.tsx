import * as React from 'react';
import * as classNames from 'classnames';

export const Box: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('box', props.className);
    
    return (
        <div {...props} className={className}>
         {props.children}
        </div>
    )
}