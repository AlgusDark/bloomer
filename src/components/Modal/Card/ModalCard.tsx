import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export function ModalCard(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('modal-card', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCard);