import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../bulma";

export interface Menu<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function Menu({ tag = "aside", ...props }: Menu<HTMLElement>) {
  const className = classNames("menu", props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Menu);
export default HOC;
