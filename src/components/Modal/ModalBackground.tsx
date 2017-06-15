import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function ModalBackground(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('modal-background', props.className);

    const { children, ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(ModalBackground);