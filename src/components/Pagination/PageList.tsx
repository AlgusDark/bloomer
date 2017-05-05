import * as React from 'react';

import { IModifiers } from './../../interfaces';
import { classNames, getHTMLProps } from './../../helpers';

export interface PageListProps extends IModifiers, React.HTMLProps<HTMLUListElement> {
}

export class PageList extends React.Component<PageListProps, {}> {
    render() {
        const className = classNames(this.props, {
            'pagination-list' : true
        });
        
        const props = getHTMLProps(this.props);

        return (
            <ul {...props} className={className}>
                {props.children}
            </ul>
        )
    }
}
