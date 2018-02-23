import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavbarDivider<T> extends Bulma.Tag, React.HTMLProps<T> {
  isBoxed?: boolean;
}

export function NavbarDivider({
  tag = 'hr',
  isBoxed,
  ...props
}: NavbarDivider<HTMLElement>) {
  const className = classNames('navbar-divider', props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(NavbarDivider);
export default HOC;
