import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Box<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function Box({ tag = 'div', ...props }: Box<HTMLElement>) {
  const className = classNames('box', props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Box);
export default HOC;
