import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getAlignmentModifiers,
  getSizeModifiers,
  removeAlignmentProps,
  removeSizeProps,
  withHelpersModifiers
} from "./../../bulma";
import { combineModifiers, getHTMLProps } from "./../../helpers";

export interface Tabs<T>
  extends Bulma.Alignment,
    Bulma.Size,
    Bulma.Tag,
    React.HTMLProps<T> {
  isAlign?: "left" | "centered" | "right";
  isBoxed?: boolean;
  isToggle?: boolean;
}

export function Tabs({ tag = "div", ...props }: Tabs<HTMLElement>) {
  const className = classNames(
    "tabs",
    {
      "is-boxed": props.isBoxed,
      "is-toggle": props.isToggle,
      ...combineModifiers(props, getAlignmentModifiers, getSizeModifiers)
    },
    props.className
  );

  const { isBoxed, isToggle, ...rest } = props;
  const HTMLProps = getHTMLProps(rest, removeAlignmentProps, removeSizeProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Tabs);
export default HOC;
