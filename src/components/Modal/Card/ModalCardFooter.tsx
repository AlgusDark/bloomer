import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const ModalCardFooter: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('modal-card-foot', props.className);

    return (
        <footer {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardFooter);