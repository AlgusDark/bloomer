import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const ModalCard: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('modal-card', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCard);