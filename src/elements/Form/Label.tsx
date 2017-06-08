import * as React from 'react';
import * as classNames from 'classnames';

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

export const Label: React.SFC<Label<HTMLLabelElement>> = (props) => {
    const className = classNames(
        'label',
        {
            ...getSizeModifiers(props),
        },
        props.className);

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <label {...HTMLProps} className={className}/>
    )
}

export default withHelpersModifiers(Label);