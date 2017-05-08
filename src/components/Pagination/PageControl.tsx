import * as React from 'react';
import { Bulma } from './../../bulma';

import { getHTMLProps, classNames } from './../../helpers';

export interface PageControlProps extends Bulma.Render<HTMLAnchorElement>,
    Bulma.State<HTMLAnchorElement>, Bulma.PageControl<HTMLAnchorElement>{
}

export const PageControl = (props: PageControlProps) => {
    const className = classNames(props, {
        'pagination-previous': !props.isNext,
        'pagination-next': !props.isPrevious,
    });

    const { render } = props;
    const htmlProps = getHTMLProps(props);

    if (render) return render({ ...htmlProps, className });

    return (
        <a {...htmlProps} className={className}>
            {props.children}
        </a>
    )
}
