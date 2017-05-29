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

export const Title: React.SFC<Title<HTMLHeadingElement | HTMLParagraphElement>> = (props) => {
    const className = classNames(
        'title',
        {
            ...combineModifiers(props, getHeadingModifiers),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeHeadingProps);

    if (props.isParagraph) return <p {...HTMLProps} className={className} />

    const element = getHeadingElement(props);

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(Title);