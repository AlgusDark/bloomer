import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../bulma";

export interface MenuList<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function MenuList({ tag = "ul", ...props }: MenuList<HTMLElement>) {
  const className = classNames("menu-list", props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(MenuList);
export default HOC;
