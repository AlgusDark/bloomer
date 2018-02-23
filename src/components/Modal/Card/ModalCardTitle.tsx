import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../../bulma";

export interface ModalCardTitle<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function ModalCardTitle({
  tag = "h1",
  ...props
}: ModalCardTitle<HTMLElement>) {
  const className = classNames("modal-card-title", props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(ModalCardTitle);
export default HOC;
