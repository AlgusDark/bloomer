import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const CardFooterItem: React.SFC<Bulma.Render & React.HTMLProps<HTMLAnchorElement>> = (props) => {
    const className = classNames('card-footer-item', props.className);

    const { render, ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(CardFooterItem);