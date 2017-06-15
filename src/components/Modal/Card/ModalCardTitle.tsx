import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export function ModalCardTitle (props: React.HTMLProps<HTMLHeadingElement>) {
    const className = classNames('modal-card-title', props.className);

    return (
        <h1 {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardTitle);