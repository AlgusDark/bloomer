import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getSizeModifiers,
    removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface Label<T> extends Bulma.Size,
    React.HTMLProps<T> {
}

export function Label(props: Label<HTMLElement>) {
    const className = classNames(
        'label',
        {
            ...getSizeModifiers(props),
        },
        props.className);

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <label {...HTMLProps as React.Props<HTMLLabelElement>} className={className} />
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(Label);
export default HOC;
