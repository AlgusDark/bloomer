import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers,
    removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Label<T> extends Bulma.Size,
    React.HTMLProps<T> {
}

export const Label: React.SFC<Label<HTMLLabelElement>> = (props) => {
    const className = classNames(
        'label',
        {
            ...combineModifiers(props, getSizeModifiers),
        },
        props.className);

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <label {...HTMLProps} className={className}/>
    )
}

export default withHelpersModifiers(Label);