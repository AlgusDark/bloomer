import * as React from 'react';

import { IModifiers } from './../../interfaces';
import { classNames, getHTMLProps } from './../../helpers';

export interface PageLinkProps extends IModifiers, React.HTMLProps<HTMLAnchorElement> {
    render?: Function
}

export class PageLink extends React.Component<PageLinkProps, {}> {
    render() {
        const className = classNames(this.props, {
            'pagination-link': true
        });

        const { render } = this.props;
        const props = getHTMLProps(this.props);

        if (render) return render({ ...props, className });

        return (
            <a {...props} className={className}>
                {this.props.children}
            </a>
        )
    }
}
