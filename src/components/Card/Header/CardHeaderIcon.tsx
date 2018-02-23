import * as React from "react";
import * as classNames from "classnames";

import { Bulma, withHelpersModifiers } from "./../../../bulma";

export interface CardHeaderIcon<T>
  extends Bulma.Render,
    Bulma.Tag,
    React.HTMLProps<T> {}

export function CardHeaderIcon({
  tag = "a",
  render,
  ...props
}: CardHeaderIcon<HTMLElement>) {
  const className = classNames("card-header-icon", props.className);

  if (render) return render({ ...props, className });

  return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(CardHeaderIcon);
export default HOC;
