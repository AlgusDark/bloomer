import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers
} from "./../../bulma";
import { getHTMLProps } from "./../../helpers";

export interface Modal<T> extends Bulma.Active, Bulma.Tag, React.HTMLProps<T> {}

export function Modal({ tag = "div", ...props }: Modal<HTMLElement>) {
  const className = classNames(
    "modal",
    {
      ...getActiveModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Modal);
export default HOC;
