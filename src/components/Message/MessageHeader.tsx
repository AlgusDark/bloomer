import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../bulma";

export interface MessageHeader<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function MessageHeader({
  tag = "div",
  ...props
}: MessageHeader<HTMLElement>) {
  const className = classNames("message-header", props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(MessageHeader);
export default HOC;
