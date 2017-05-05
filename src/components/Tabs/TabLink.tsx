import * as React from 'react';

import { IModifiers, IRender } from './../../interfaces';
import { classNames, getHTMLProps } from './../../helpers';

export interface TabLinkProps extends IModifiers, IRender, React.HTMLProps<HTMLAnchorElement> { }

export class TabLink extends React.Component<TabLinkProps, {}> {
    render() {
        const className = classNames(this.props);
        const { render } = this.props;
        const props = getHTMLProps(this.props);

        if (render) return render({ ...props, className });

        return (
            <a {...props} className={className}>
                {props.children}
            </a>
        )
    }
}
