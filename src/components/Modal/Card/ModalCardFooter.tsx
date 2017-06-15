import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export function ModalCardFooter(props: React.HTMLProps<HTMLElement>) {
    const className = classNames('modal-card-foot', props.className);

    return (
        <footer {...props} className={className} />
    )
}

export default withHelpersModifiers(ModalCardFooter);