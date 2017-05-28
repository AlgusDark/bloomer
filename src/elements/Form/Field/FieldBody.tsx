import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers,
} from './../../../bulma';

export const FieldBody: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames(
        'field-body',
        props.className
    );

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(FieldBody);