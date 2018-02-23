import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers
} from "./../../bulma";
import { getHTMLProps } from "./../../helpers";

export interface NavbarMenu<T>
  extends Bulma.Tag,
    Bulma.Active,
    React.HTMLProps<T> {}

export function NavbarMenu({ tag = "div", ...props }: NavbarMenu<HTMLElement>) {
  const className = classNames(
    "navbar-menu",
    {
      ...getActiveModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(NavbarMenu);
export default HOC;
