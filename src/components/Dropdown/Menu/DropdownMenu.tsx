import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface DropdownMenu<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function DropdownMenu({ tag = 'div', ...props }: DropdownMenu<HTMLElement>) {
    const className = classNames('dropdown-menu', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(DropdownMenu);
export default HOC;
