import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface MenuLink<T>
  extends Bulma.Tag,
    Bulma.Render,
    Bulma.Active,
    React.HTMLProps<T> {}

export function MenuLink({
  tag = 'a',
  render,
  ...props
}: MenuLink<HTMLElement>) {
  const className =
    classNames(
      {
        ...getActiveModifiers(props)
      },
      props.className
    ) || undefined;

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  if (render) return render({ ...HTMLProps, className });

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(MenuLink);
export default HOC;
