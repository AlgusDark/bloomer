import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    removeAlignmentProps, removeSizeProps,
    getAlignmentModifiers, getSizeModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Pagination<T> extends Bulma.Alignment, Bulma.Size,
    React.HTMLProps<T> {
        isAlign?: 'left' | 'centered' | 'right'
    }

export const Pagination: React.SFC<Pagination<HTMLElement>> = (props) => {
    const className = classNames(
        'pagination',
        {
            ...combineModifiers(props, getAlignmentModifiers, getSizeModifiers)
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(
        props,
        removeAlignmentProps,
        removeSizeProps
    );

    return (
        <nav {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Pagination);
