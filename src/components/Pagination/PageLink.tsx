import * as React from 'react';
import { Bulma } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface PageLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isCurrent?: boolean;
}

export function getPageLinkClasses(props: PageLink<HTMLAnchorElement>) {
    return {
        'is-current': props.isCurrent
    }
}

export const PageLink = (props: PageLink<HTMLAnchorElement>) => {
    const className = classNames(props, { 'pagination-link': true });

    const { render } = props;
    const htmlProps = getHTMLProps(props);

    if (render) return render({ ...htmlProps, className });

    return (
        <a {...htmlProps} className={className}>
            {props.children}
        </a>
    )
}
