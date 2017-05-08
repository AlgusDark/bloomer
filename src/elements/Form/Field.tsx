import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface FieldProps extends Bulma.Field<HTMLDivElement> {
}

export const Field = (props: FieldProps) => {
    const className = classNames(props, { field: true });
    const htmlProps = getHTMLProps(props);

    return (
        <div {...htmlProps} className={className}>
            {props.children}
        </div>
    )
}