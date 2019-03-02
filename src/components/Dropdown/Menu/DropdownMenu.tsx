import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface DropdownMenu<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function DropdownMenu({ ...props }: DropdownMenu<HTMLElement>) {
    const className = classNames('dropdown-menu', props.className);

    return React.createElement('div', { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(DropdownMenu);
export default HOC;
