import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getColorModifiers,
  getSizeModifiers,
  removeColorProps,
  removeSizeProps,
  withHelpersModifiers
} from "./../bulma";
import { combineModifiers, getHTMLProps } from "./../helpers";

export interface Progress<T>
  extends Bulma.Size,
    Bulma.Color,
    Bulma.Tag,
    React.HTMLProps<T> {}

export function Progress({
  tag = "progress",
  ...props
}: Progress<HTMLElement>) {
  const className = classNames(
    "progress",
    {
      ...combineModifiers(props, getSizeModifiers, getColorModifiers)
    },
    props.className
  );
  const HTMLProps = getHTMLProps(props, removeSizeProps, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Progress);
export default HOC;
