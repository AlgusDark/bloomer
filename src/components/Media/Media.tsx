import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getSizeModifiers,
  removeSizeProps,
  withHelpersModifiers
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface Media<T> extends Bulma.Size, Bulma.Tag, React.HTMLProps<T> {
  isSize?: 'large';
}

export function Media({ tag = 'article', ...props }: Media<HTMLElement>) {
  const className = classNames(
    'media',
    {
      ...getSizeModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeSizeProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Media);
export default HOC;
