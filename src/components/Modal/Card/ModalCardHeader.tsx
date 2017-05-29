import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const ModalCardHeader: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('modal-card-head', props.className);

    return (
        <header {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardHeader);