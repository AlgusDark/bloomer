import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getActiveModifiers,
  getFocusedModifiers,
  removeActiveModifiers,
  removeFocusedModifiers,
  withHelpersModifiers
} from "./../../bulma";
import { combineModifiers, getHTMLProps } from "./../../helpers";

export interface Ellipsis<T>
  extends Bulma.Active,
    Bulma.Focused,
    Bulma.Tag,
    React.HTMLProps<T> {}

export function Ellipsis({ tag = "span", ...props }: Ellipsis<HTMLElement>) {
  const className = classNames(
    "pagination-ellipsis",
    {
      ...combineModifiers(props, getActiveModifiers, getFocusedModifiers)
    },
    props.className
  );

  const { children, ...HTMLProps } = getHTMLProps(
    props,
    removeActiveModifiers,
    removeFocusedModifiers
  );

  return React.createElement(tag, { ...HTMLProps, className }, "\u2026");
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Ellipsis);
export default HOC;
