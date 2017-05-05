import * as React from 'react';
import * as classNames from 'classnames'

export class Box extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    render() {
        const className = classNames('box', this.props.className);

        return (
            <div {...this.props} className={className}>
                {this.props.children}
            </div>
        )
    }
}