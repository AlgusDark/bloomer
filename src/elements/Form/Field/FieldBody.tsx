import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers,
} from './../../../bulma';

export function FieldBody(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames(
        'field-body',
        props.className
    );

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(FieldBody);