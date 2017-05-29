import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const ModalCardBody: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('modal-card-body', props.className);

    return (
        <section {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardBody);