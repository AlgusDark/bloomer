import * as React from 'react';
import * as classNames from 'classnames';

export const HeroBody: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('hero-body', props.className);
    
    return (
        <div {...props} className={className}>
         {props.children}
        </div>
    )
}