import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getHeadingModifiers,
  removeHeadingProps,
  withHelpersModifiers
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Title<T>
  extends Bulma.Heading,
    Bulma.Tag,
    React.HTMLProps<T> {}

export function Title({ tag = 'h1', ...props }: Title<HTMLElement>) {
  const className = classNames(
    'title',
    {
      ...getHeadingModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeHeadingProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Title);
export default HOC;
