import * as React from 'react';

import { IModifiers } from './../../interfaces';
import { classNames, getHTMLProps } from './../../helpers';

export interface TabProps extends IModifiers, React.HTMLProps<HTMLLIElement> { }

export class Tab extends React.Component<TabProps, {}> {
    render() {
        const className = classNames(this.props);
        const props = getHTMLProps(this.props);

        return (
            <li {...props} className={className}>
                {props.children}
            </li>
        )
    }
}
