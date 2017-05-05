import * as React from 'react';

import { IModifiers } from './../../interfaces';
import { classNames, getHTMLProps } from './../../helpers';

export interface PaginationProps extends IModifiers, React.HTMLProps<HTMLElement> { }

export class Pagination extends React.Component<PaginationProps, {}> {
    render() {
        const className = classNames(this.props, { pagination: true });
        const props = getHTMLProps(this.props);

        return (
            <nav {...props} className={className}>
                {props.children}
            </nav>
        )
    }
}
