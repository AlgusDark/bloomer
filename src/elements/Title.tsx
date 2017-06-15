import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getHeadingElement,
    getHeadingModifiers, removeHeadingProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Title<T> extends Bulma.Heading, React.HTMLProps<T> {
}

export function Title(props: Title<HTMLHeadingElement | HTMLParagraphElement>) {
    const className = classNames(
        'title',
        {
            ...getHeadingModifiers(props),
        },
        props.className,
    );
    
    const HTMLProps = getHTMLProps(props, removeHeadingProps);

    if (props.isParagraph) return <p {...HTMLProps} className={className} />

    const element = getHeadingElement(props);

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(Title);