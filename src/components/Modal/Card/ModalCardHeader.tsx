import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export function ModalCardHeader(props: React.HTMLProps<HTMLElement>) {
    const className = classNames('modal-card-head', props.className);

    return (
        <header {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardHeader);