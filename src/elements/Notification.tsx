import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, removeColorProps, getColorModifiers, withHelpersModifiers } from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Notification<T> extends Bulma.Color, React.HTMLProps<T> { }

export const Notification: React.SFC<Notification<HTMLElement>> = (props) => {
    const className = classNames(
        'notification',
        {
            ...getColorModifiers(props)
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeColorProps);

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Notification);