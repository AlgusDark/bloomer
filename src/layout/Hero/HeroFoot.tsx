import * as React from 'react';
import * as classNames from 'classnames';

export const HeroFoot: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('hero-foot', props.className);
    
    return (
        <div {...props} className={className}>
         {props.children}
        </div>
    )
}