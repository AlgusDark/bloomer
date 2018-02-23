import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../../bulma";

export interface Level<T> extends Bulma.Tag, React.HTMLProps<T> {
  isMobile?: boolean;
}

export function Level({ tag = "nav", ...props }: Level<HTMLElement>) {
  const className = classNames(
    "level",
    {
      "is-mobile": props.isMobile
    },
    props.className
  );

  const { isMobile, ...HTMLProps } = props;

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Level);
export default HOC;
