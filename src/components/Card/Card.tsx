import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Card<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function Card({ tag = 'div', ...props }: Card<HTMLElement>) {
  const className = classNames('card', props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Card);
export default HOC;
