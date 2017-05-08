import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface ContentProps extends Bulma.Sizes<HTMLDivElement> { }

export const Content = (props: ContentProps) => {
    const className = classNames(props, { content: true });
    const htmlProps = getHTMLProps(props);

    return (
        <div {...htmlProps} className={className}>
            {props.children}
        </div>
    )
}