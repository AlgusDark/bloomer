import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface MediaLeft<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function MediaLeft({ tag = 'div', ...props }: MediaLeft<HTMLElement>) {
  const className = classNames('media-left', props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(MediaLeft);
export default HOC;
