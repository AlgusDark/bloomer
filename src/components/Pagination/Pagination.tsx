import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getAlignmentModifiers,
  getSizeModifiers,
  removeAlignmentProps,
  removeSizeProps,
  withHelpersModifiers
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Pagination<T>
  extends Bulma.Alignment,
    Bulma.Tag,
    Bulma.Size,
    React.HTMLProps<T> {
  isAlign?: 'left' | 'centered' | 'right';
}

export function Pagination({ tag = 'nav', ...props }: Pagination<HTMLElement>) {
  const className = classNames(
    'pagination',
    {
      ...combineModifiers(props, getAlignmentModifiers, getSizeModifiers)
    },
    props.className
  );
  const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Pagination);
export default HOC;
