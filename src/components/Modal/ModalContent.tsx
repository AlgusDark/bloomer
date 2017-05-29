import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const ModalContent: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('modal-content', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalContent);