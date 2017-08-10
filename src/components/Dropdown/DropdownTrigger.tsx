import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface DropdownTrigger<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function DropdownTrigger({ tag = 'div', ...props }: DropdownTrigger<HTMLElement>) {
    const className = classNames('dropdown-trigger', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(DropdownTrigger);
export default HOC;
