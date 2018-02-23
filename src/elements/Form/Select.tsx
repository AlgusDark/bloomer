import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getColorModifiers,
  getLoadingModifiers,
  getSizeModifiers,
  removeColorProps,
  removeLoadingProps,
  removeSizeProps,
  withHelpersModifiers
} from "./../../bulma";
import { combineModifiers, getHTMLProps } from "./../../helpers";

export interface Select<T>
  extends Bulma.Color,
    Bulma.Size,
    Bulma.Loading,
    React.HTMLProps<T> {}

export function Select(props: Select<HTMLElement>) {
  const wrapperClassName = classNames(
    "select",
    {
      "is-disabled": props.disabled,
      ...combineModifiers(
        props,
        getColorModifiers,
        getSizeModifiers,
        getLoadingModifiers
      )
    },
    props.className
  );

  const { children, className, ...HTMLProps } = getHTMLProps(
    props,
    removeColorProps,
    removeSizeProps,
    removeLoadingProps
  );

  return (
    <div className={wrapperClassName}>
      <select {...HTMLProps}>{children}</select>
    </div>
  );
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Select);
export default HOC;
