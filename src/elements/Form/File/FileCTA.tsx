import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers, removeColorProps,
  withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface FileCTA<T> extends Bulma.Tag, React.HTMLProps<T> {

}

export function FileCTA({ tag = 'span', ...props }: FileCTA<HTMLElement>) {
  const className = classNames(
      'file-cta',
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(FileCTA);
export default HOC;