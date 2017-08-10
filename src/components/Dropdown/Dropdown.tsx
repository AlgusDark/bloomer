import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getActiveModifiers, getAlignmentModifiers,
  removeActiveModifiers, removeAlignmentProps,
  withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Dropdown<T> extends Bulma.Active, Bulma.Alignment, Bulma.Tag, React.HTMLProps<T> {
  isActive?: boolean;
  isAlign?: 'right';
  isHoverable?: boolean;
}

export function Dropdown({ tag = 'div', isHoverable, ...props }: Dropdown<HTMLElement>) {
    const className = classNames(
        'dropdown',
        {
            'is-hoverable': isHoverable,
            ...combineModifiers(props, getActiveModifiers, getAlignmentModifiers),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeActiveModifiers, removeAlignmentProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Dropdown);
export default HOC;
