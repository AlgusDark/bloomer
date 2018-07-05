import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers, removeColorProps,
  withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface FileInput<T> extends React.HTMLProps<T> {

}

export function FileInput(props: FileInput<HTMLElement>) {
  const className = classNames(
      'file-input',
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return <input {...HTMLProps} className={className} type="file" />;
}

const HOC = /*@__PURE__*/withHelpersModifiers(FileInput);
export default HOC;