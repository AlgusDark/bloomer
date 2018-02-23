import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  isCentered,
  isFullWidth,
  isRight,
  withHelpersModifiers
} from "./../../../bulma";

import { isOption } from "./../../../helpers";

export type Directions = "right" | "centered";

export interface Field<T> extends Bulma.Tag, React.HTMLProps<T> {
  isGrouped?: boolean | Directions;
  hasAddons?: boolean | Directions | "fullwidth";
  isHorizontal?: boolean;
}

const getModifier = (
  modifier: boolean | Directions | "fullwidth",
  helper: string,
  isDirection: Function
): object => {
  if (modifier === true) {
    return { [`${helper}`]: true };
  } else if (typeof modifier === "string") {
    return isDirection(modifier)
      ? { [`${helper} ${helper}-${modifier}`]: true }
      : {};
  }

  return {};
};

export function Field({ tag = "div", ...props }: Field<HTMLElement>) {
  const className = classNames(
    "field",
    {
      ...getModifier(
        props.isGrouped,
        "is-grouped",
        isOption(isRight, isCentered)
      ),
      ...getModifier(
        props.hasAddons,
        "has-addons",
        isOption(isRight, isCentered, isFullWidth)
      ),
      "is-horizontal": props.isHorizontal
    },
    props.className
  );
  const { isGrouped, hasAddons, isHorizontal, ...HTMLProps } = props;

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Field);
export default HOC;
