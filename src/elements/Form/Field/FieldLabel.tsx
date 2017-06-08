import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers'

export interface FieldLabel<T> extends Bulma.Size,
    React.HTMLProps<T> {
    isNormal?: boolean,
}

export const FieldLabel: React.SFC<FieldLabel<HTMLDivElement>> = (props) => {
    const className = classNames(
        'field-label',
        {
            'is-normal': props.isNormal,
            ...getSizeModifiers(props)
        },
        props.className);
    const {
        isNormal,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeSizeProps);

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(FieldLabel);