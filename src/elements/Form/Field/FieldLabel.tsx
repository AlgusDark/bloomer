import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getSizeModifiers,
  removeSizeProps,
  withHelpersModifiers
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface FieldLabel<T>
  extends Bulma.Size,
    Bulma.Tag,
    React.HTMLProps<T> {
  isNormal?: boolean;
}

export function FieldLabel({ tag = 'div', ...props }: FieldLabel<HTMLElement>) {
  const className = classNames(
    'field-label',
    {
      'is-normal': props.isNormal,
      ...getSizeModifiers(props)
    },
    props.className
  );

  const { isNormal, ...rest } = props;

  const HTMLProps = getHTMLProps(rest, removeSizeProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(FieldLabel);
export default HOC;
