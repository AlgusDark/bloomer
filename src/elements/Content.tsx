import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, removeSizeProps, getSizeModifiers, withHelpersModifiers } from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Content<T> extends Bulma.Size, React.HTMLProps<HTMLDivElement> { }

export const Content: React.SFC<Content<HTMLDivElement>> = (props) => {
    const className = classNames(
        'content',
        { ...combineModifiers(props, getSizeModifiers) },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Content);