import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers, removeColorProps,
  withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface FileIcon<T> extends Bulma.Tag, React.HTMLProps<T> {

}

export function FileIcon({ tag = 'span', ...props }: FileIcon<HTMLElement>) {
  const className = classNames(
      'file-icon',
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(FileIcon);
export default HOC;