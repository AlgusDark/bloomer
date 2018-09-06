import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers, removeColorProps,
  withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface FileName<T> extends Bulma.Tag,
    React.HTMLProps<T> {

}

export function FileName({ tag = 'span', ...props }: FileName<HTMLElement>) {
  const className = classNames(
      'file-name',
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(FileName);
export default HOC;