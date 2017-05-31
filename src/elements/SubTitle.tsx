import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getHeadingElement,
    getHeadingModifiers, removeHeadingProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface SubTitle<T> extends Bulma.Heading, React.HTMLProps<T> {
}

export const SubTitle: React.SFC<SubTitle<HTMLHeadingElement | HTMLParagraphElement>> = (props) => {
    const className = classNames(
        'subtitle',
        {
            ...combineModifiers(props, getHeadingModifiers),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeHeadingProps);

    if (props.isParagraph) return <p {...HTMLProps} className={className} />

    const element = getHeadingElement(props, 2);

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(SubTitle);