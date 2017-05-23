import * as React from 'react';
import * as classNames from 'classnames';

export const HeroHead: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('hero-head', props.className);
    
    return (
        <div {...props} className={className}>
         {props.children}
        </div>
    )
}