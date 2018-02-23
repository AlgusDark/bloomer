import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers,
  removeColorProps,
  withHelpersModifiers
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface Help<T> extends Bulma.Color, Bulma.Tag, React.HTMLProps<T> {}

export function Help({ tag = 'p', ...props }: Help<HTMLElement>) {
  const className = classNames(
    'help',
    {
      ...getColorModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Help);
export default HOC;
