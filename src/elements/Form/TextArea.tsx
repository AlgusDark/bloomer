import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, getStateModifiers,
    removeSizeProps, removeStateProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface TextArea<T> extends Bulma.Size, Bulma.State, React.HTMLProps<T> {
}

export const TextArea: React.SFC<TextArea<HTMLTextAreaElement>> = (props) => {
    const className = classNames(
        'textarea',
        {
            ...combineModifiers(props, getSizeModifiers, getStateModifiers),
        },
        props.className
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps, removeStateProps)

    return (
        <textarea {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(TextArea);