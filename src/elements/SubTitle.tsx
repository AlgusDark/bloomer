import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getHeadingElement,
    getHeadingModifiers, removeHeadingProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface SubTitle<T> extends Bulma.Headings, React.HTMLProps<T> {
}

export const SubTitle: React.SFC<SubTitle<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'subtitle',
        {
            ...combineModifiers(props, getHeadingModifiers),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeHeadingProps);

    const element = getHeadingElement(props);

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(SubTitle);