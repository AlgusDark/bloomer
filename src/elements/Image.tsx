import * as classNames from "classnames";
import * as React from "react";

import { Bulma, withHelpersModifiers } from "./../bulma";
import { combineModifiers, getHTMLProps, is } from "./../helpers";

export interface Size {
  isSize?:
    | "16x16"
    | "24x24"
    | "32x32"
    | "48x48"
    | "64x64"
    | "96x96"
    | "128x128";
}

export interface Ratio {
  isRatio?: "square" | "1:1" | "4:3" | "3:2" | "16:9" | "2:1";
}

export interface Image<T> extends Size, Ratio, React.HTMLProps<T> {}

const isRatio = is({
  "16:9": "16by9",
  "1:1": "1by1",
  "2:1": "2by1",
  "3:2": "3by2",
  "4:3": "4by3",
  square: "square"
});

const isSize = is({
  "128x128": true,
  "16x16": true,
  "24x24": true,
  "32x32": true,
  "48x48": true,
  "64x64": true,
  "96x96": true
});

function getSizeModifiers<T>({ isSize: size }: Image<T>) {
  return {
    ...(isSize(size) ? { [`is-${size}`]: true } : {})
  };
}

function getRatioModifiers<T>({ isRatio: ratio }: Image<T>) {
  return {
    ...(isRatio(ratio) ? { [`is-${isRatio(ratio)}`]: true } : {})
  };
}

function removeImageProps<T>(props: Image<T>) {
  const { isSize, isRatio, ...rest } = props;
  return rest;
}

export function Image(props: Image<HTMLElement>) {
  const className = classNames(
    "image",
    {
      ...combineModifiers(props, getSizeModifiers, getRatioModifiers)
    },
    props.className
  );

  const { children, src, ...HTMLProps } = getHTMLProps(props, removeImageProps);

  return (
    <figure {...HTMLProps} className={className}>
      <img src={src} />
    </figure>
  );
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Image);
export default HOC;
