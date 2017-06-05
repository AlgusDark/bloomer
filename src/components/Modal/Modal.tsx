import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers'

export interface Modal<T> extends Bulma.Active, React.HTMLProps<T> {
}

export const Modal: React.SFC<Modal<HTMLDivElement>> = (props) => {
    const className = classNames(
        'modal',
        {
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Modal);