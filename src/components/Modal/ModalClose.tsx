import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface ModalClose<T> extends Bulma.Size, Bulma.Render, React.HTMLProps<T> {

}

export function ModalClose(props: ModalClose<HTMLButtonElement>) {
    const className = classNames(
        'modal-close',
        {
            ...getSizeModifiers(props)
        },
        props.className,
    );

    const { render, ...rest } = props;

    const HTMLProps = getHTMLProps(rest, removeSizeProps);

    if (render) return render({ ...HTMLProps, className });

    return (
        <button {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(ModalClose);