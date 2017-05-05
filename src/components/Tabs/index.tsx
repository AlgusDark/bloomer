import * as React from 'react';

import { IModifiers } from './../../interfaces';
import { classNames, getHTMLProps } from './../../helpers';

export interface TabsProps extends IModifiers, React.HTMLProps<HTMLDivElement> { }

export class Tabs extends React.Component<TabsProps, {}> {
    render() {
        const className = classNames(this.props, { tabs: true });
        const props = getHTMLProps(this.props);

        return (
            <div {...props} className={className}>
                {props.children}
            </div>
        )
    }
}
