import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers
} from "./../../bulma";

import { getHTMLProps } from "./../../helpers";

export interface BreadcrumbItem<T>
  extends Bulma.Active,
    Bulma.Tag,
    React.HTMLProps<T> {}

export function BreadcrumbItem({
  tag = "li",
  ...props
}: BreadcrumbItem<HTMLElement>) {
  const className =
    classNames(
      {
        ...getActiveModifiers(props)
      },
      props.className
    ) || undefined;

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(BreadcrumbItem);
export default HOC;
