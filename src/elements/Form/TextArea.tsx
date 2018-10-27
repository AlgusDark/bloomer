import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getSizeModifiers, getStateModifiers,
    removeSizeProps, removeStateProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface TextArea<T> extends Bulma.Size, Bulma.State, React.HTMLProps<T> {
}

export function TextArea(props: TextArea<HTMLElement>) {
    const className = classNames(
        'textarea',
        {
            ...combineModifiers(props, getSizeModifiers, getStateModifiers),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps, removeStateProps);

    return (
        <textarea {...HTMLProps as React.HTMLProps<HTMLTextAreaElement>} className={className} />
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(TextArea);
export default HOC;
