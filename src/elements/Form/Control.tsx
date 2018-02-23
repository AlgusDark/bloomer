import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getLoadingModifiers,
  isLeft,
  isRight,
  removeLoadingProps,
  withHelpersModifiers
} from "./../../bulma";

import { getHTMLProps, is, isOption } from "./../../helpers";

export type Directions = "left" | "right";

export interface Control<T>
  extends Bulma.Loading,
    Bulma.Tag,
    React.HTMLProps<T> {
  hasIcons?: boolean | Directions | Directions[];
  isExpanded?: boolean;
}

const isDirection = isOption(isLeft, isRight);

const getModifier = modifier => {
  if (modifier === true) {
    return { "has-icons-left has-icons-right": true };
  } else if (typeof modifier === "string") {
    return isDirection(modifier) ? { [`has-icons-${modifier}`]: true } : {};
  } else if (Array.isArray(modifier)) {
    return modifier
      .map(str => str.toLowerCase().trim())
      .reduce(
        (init, option) =>
          isDirection(option)
            ? { ...init, [`has-icons-${option}`]: true }
            : init,
        {}
      );
  }

  return {};
};

export function Control({ tag = "div", ...props }: Control<HTMLElement>) {
  const className = classNames(
    "control",
    {
      ...getModifier(props.hasIcons),
      "is-expanded": props.isExpanded,
      ...getLoadingModifiers(props)
    },
    props.className
  );
  const { hasIcons, isExpanded, ...rest } = props;

  const HTMLProps = getHTMLProps(rest, removeLoadingProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Control);
export default HOC;
