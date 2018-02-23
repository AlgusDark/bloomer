import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface DropdownContent<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function DropdownContent({
  tag = 'div',
  ...props
}: DropdownContent<HTMLElement>) {
  const className = classNames('dropdown-content', props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(DropdownContent);
export default HOC;
