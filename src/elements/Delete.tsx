import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, getSizeModifiers, removeSizeProps, withHelpersModifiers } from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Delete<T> extends Bulma.Render, Bulma.Size,
    React.HTMLProps<T> { }

export function Delete(props: Delete<HTMLButtonElement | HTMLAnchorElement>) {
    const className = classNames(
        'delete',
        {
            ...getSizeModifiers(props),
        },
        props.className,
    );
    const { render, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeSizeProps);

    if (render) return render({ ...HTMLProps, className });

    const anchor = (
        <a role="button" {...HTMLProps} className={className}></a>
    );

    const button = (
        <button type={props.type || 'button'} {...HTMLProps} className={className}></button>
    );

    return props.href ? anchor : button;
}

const HOC = /*@__PURE__*/withHelpersModifiers(Delete);
export default HOC;
