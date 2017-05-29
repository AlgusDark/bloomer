import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const ModalCardTitle: React.SFC<React.HTMLProps<HTMLHeadingElement>> = (props) => {
    const className = classNames('modal-card-title', props.className);

    return (
        <h1 {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardTitle);