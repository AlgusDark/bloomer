import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../../bulma";

export interface DropdownDivider<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function DropdownDivider({
  tag = "hr",
  ...props
}: DropdownDivider<HTMLElement>) {
  const className = classNames("dropdown-divider", props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(DropdownDivider);
export default HOC;
