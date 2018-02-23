import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../bulma";

export interface PanelHeading<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function PanelHeading({
  tag = "p",
  ...props
}: PanelHeading<HTMLElement>) {
  const className = classNames("panel-heading", props.className);

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(PanelHeading);
export default HOC;
