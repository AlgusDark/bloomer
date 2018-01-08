import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface DropdownItem<T> extends Bulma.Active, Bulma.Render, Bulma.Tag, React.HTMLProps<T> { }

export function DropdownItem({ tag = 'div', render, ...props }: DropdownItem<HTMLElement>) {
  const className = classNames(
      'dropdown-item',
      {
          ...getActiveModifiers(props),
      },
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  if (render) return render({ ...HTMLProps, className });

  return React.createElement((props.href ? 'a' : tag), { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(DropdownItem);
export default HOC;
