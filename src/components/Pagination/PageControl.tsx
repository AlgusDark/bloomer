import * as React from 'react';

import { IModifiers, IRender, IPageControl } from './../../interfaces';
import { getHTMLProps, classNames } from './../../helpers';

export interface PageControlProps extends
    IModifiers, IRender, IPageControl,
    React.HTMLProps<HTMLAnchorElement> {
}

export class PageControl extends React.Component<PageControlProps, {}> {
    render() {
        const className = classNames(this.props, {
            'pagination-previous': !this.props.isNext,
            'pagination-next': !this.props.isPrevious,
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
