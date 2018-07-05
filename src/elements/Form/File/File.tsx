import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers, removeColorProps,
  withHelpersModifiers,
  getAlignmentModifiers,
  getSizeModifiers,
} from './../../../bulma';
import { combineModifiers, getHTMLProps } from './../../../helpers';

export interface File<T> extends Bulma.Alignment, Bulma.Color, Bulma.Size, Bulma.Tag, React.HTMLProps<T> {
    hasName?: boolean;
    isBoxed?: boolean;
}

export function File({ tag = 'div', ...props }: File<HTMLElement>) {
  const className = classNames(
      'file',
      {
          'has-name': props.hasName,
          'is-boxed': props.isBoxed,
          ...combineModifiers(props, getAlignmentModifiers, getColorModifiers, getSizeModifiers),
      },
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(File);
export default HOC;