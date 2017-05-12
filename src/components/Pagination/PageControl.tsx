import * as React from 'react';
import { Bulma } from './../../bulma';

import { getHTMLProps, classNames } from './../../helpers';

export interface PageControl<T> extends Bulma.Render, React.HTMLProps<T> {
    isNext?: boolean,
    isPrevious?: boolean,
}

export const PageControl = (props: PageControl<HTMLAnchorElement>) => {
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
