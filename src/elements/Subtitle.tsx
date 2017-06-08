import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getHeadingElement,
    getHeadingModifiers, removeHeadingProps,
    withHelpersModifiers,
} from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Subtitle<T> extends Bulma.Heading, React.HTMLProps<T> {
}

export const Subtitle: React.SFC<Subtitle<HTMLHeadingElement | HTMLParagraphElement>> = (props) => {
    const className = classNames(
        'subtitle',
        {
            ...getHeadingModifiers(props),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeHeadingProps);

    if (props.isParagraph) return <p {...HTMLProps} className={className} />

    const element = getHeadingElement(props, 2);

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(Subtitle);