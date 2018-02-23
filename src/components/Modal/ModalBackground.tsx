import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../bulma";

export interface ModalBackground<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function ModalBackground({
  tag = "div",
  ...props
}: ModalBackground<HTMLElement>) {
  const className = classNames("modal-background", props.className);

  const { children, ...HTMLProps } = props;

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(ModalBackground);
export default HOC;
