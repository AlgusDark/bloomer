import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, removeColorProps, getColorModifiers, withHelpersModifiers } from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Message<T> extends Bulma.Color, React.HTMLProps<T> { }

export function Message(props: Message<HTMLElement>) {
    const className = classNames(
        'message',
        {
            ...getColorModifiers(props)
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeColorProps);

    return (
        <article {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Message);