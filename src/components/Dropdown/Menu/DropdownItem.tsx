import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface DropdownItem<T> extends Bulma.Render, Bulma.Tag, React.HTMLProps<T> { }

export function DropdownItem({ tag = 'div', render, ...props }: DropdownItem<HTMLElement>) {
    const className = classNames('dropdown-item', props.className);

    if (render) return render({ ...props, className });

    return React.createElement((props.href ? 'a' : tag), { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(DropdownItem);
export default HOC;
