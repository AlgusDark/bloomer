import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Heading<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function Heading({ tag = 'p', ...props }: Heading<HTMLElement>) {
  const className = classNames('heading', props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Heading);
export default HOC;
