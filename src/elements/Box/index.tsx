import * as React from 'react';
import * as classNames from 'classnames';
import { Bulma } from './../../bulma';

export const Box = (props: React.HTMLProps<HTMLDivElement>) => {
    const className = classNames('box', props.className);
    
    return (
        <div {...props} className={className}>
         {props.children}
        </div>
    )
}