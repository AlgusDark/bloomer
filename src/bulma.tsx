import * as classNames from "classnames";
import * as React from "react";

import { Grid } from "./grid/grid";
import {
  combineModifiers,
  getHTMLProps,
  is,
  isBetween,
  isOption
} from "./helpers";

export declare namespace Bulma {
  // Modifiers
  export interface Alignment {
    isAlign?: string;
  }

  export type Sizes = "large" | "medium" | "small";
  export interface Size {
    isSize?: Sizes;
  }

  export interface Tag {
    tag?: keyof React.ReactHTML;
  }

  export interface FullWidth {
    isFullWidth?: boolean;
  }

  export interface Active {
    isActive?: boolean;
  }

  export interface Hovered {
    isHovered?: boolean;
  }

  export interface Focused {
    isFocused?: boolean;
  }

  export interface State extends Active, Hovered, Focused {}

  export interface Loading {
    isLoading?: boolean;
  }

  export interface Color {
    isColor?: string;
  }

  export type HeadingSizes = 1 | 2 | 3 | 4 | 5 | 6;

  export interface Heading {
    isSize?: HeadingSizes;
    isSpaced?: boolean;
  }

  export interface Grid extends Grid.HorizontalSize, Grid.Offset {}

  export type Platform =
    | "mobile"
    | "tablet"
    | "touch"
    | "desktop"
    | "widescreen";
  export type PlatformOnly = "tablet-only" | "desktop-only";
  export type AllPlatforms = Platform | PlatformOnly;
  export type AllPlatformsWithDefault = AllPlatforms | "default";

  export type FlexDisplay =
    | "flex"
    | "flex-mobile"
    | "flex-tablet"
    | "flex-touch"
    | "flex-desktop"
    | "flex-widescreen"
    | "flex-tablet-only"
    | "flex-desktop-only";
  export type BlockDisplay =
    | "block"
    | "block-mobile"
    | "block-tablet"
    | "block-touch"
    | "block-desktop"
    | "block-widescreen"
    | "block-tablet-only"
    | "block-desktop-only";
  export type InlineDisplay =
    | "inline"
    | "inline-mobile"
    | "inline-tablet"
    | "inline-touch"
    | "inline-desktop"
    | "inline-widescreen"
    | "inline-tablet-only"
    | "inline-desktop-only";
  export type InlineBlockDisplay =
    | "inline-block"
    | "inline-block-mobile"
    | "inline-block-tablet"
    | "inline-block-touch"
    | "inline-block-desktop"
    | "inline-block-widescreen"
    | "inline-block-tablet-only"
    | "inline-block-desktop-only";
  export type InlineFlexDisplay =
    | "inline-flex"
    | "inline-flex-mobile"
    | "inline-flex-tablet"
    | "inline-flex-touch"
    | "inline-flex-desktop"
    | "inline-flex-widescreen"
    | "inline-flex-tablet-only"
    | "inline-flex-desktop-only";
  export type Displays =
    | FlexDisplay
    | BlockDisplay
    | InlineDisplay
    | InlineBlockDisplay
    | InlineFlexDisplay;

  export interface DisplayObject {
    flex?: AllPlatformsWithDefault | AllPlatformsWithDefault[];
    block?: AllPlatformsWithDefault | AllPlatformsWithDefault[];
    inline?: AllPlatformsWithDefault | AllPlatformsWithDefault[];
    "inline-block"?: AllPlatformsWithDefault | AllPlatformsWithDefault[];
    "inline-flex"?: AllPlatformsWithDefault | AllPlatformsWithDefault[];
  }

  export interface Show {
    isDisplay?: Displays | Displays[] | DisplayObject;
  }

  export interface Hide {
    isHidden?: boolean | AllPlatforms | AllPlatforms[];
  }

  export interface Responsive extends Show, Hide {}

  export type Alignments = "left" | "right";

  export interface Helpers extends FullWidth, Responsive {
    isClearfix?: boolean;
    isPulled?: Alignments;

    isOverlay?: boolean;

    isMarginless?: boolean;
    isPaddingless?: boolean;
    isUnselectable?: boolean;

    hasTextAlign?: Alignments | "centered";
    hasTextColor?: string;
  }

  export interface Modifiers
    extends Alignment,
      Size,
      FullWidth,
      State,
      Color,
      Helpers {}

  export interface Render {
    render?: Function;
  }

  export interface NonHTMLProps extends Modifiers, Render {}

  export type Component<T> =
    | React.ComponentClass<T & React.HTMLProps<HTMLElement>>
    | React.SFC<T & React.HTMLProps<HTMLElement>>;
}

export const isMobile = is({ mobile: true });
export const isTablet = is({ tablet: true });
export const isTouch = is({ touch: true });
export const isDesktop = is({ desktop: true });
export const isWidescreen = is({ widescreen: true });
export const isFullHD = is({ fullhd: true });

const isTabletOnly = is({ "tablet-only": true });
const isDesktopOnly = is({ "desktop-only": true });

export const isLeft = is({ left: true });
export const isRight = is({ right: true });
export const isCentered = is({ centered: true });

export const isCenter = is({ center: true });
export const isFullWidth = is({ fullwidth: true });

const isSmall = is({ small: true });
const isMedium = is({ medium: true });
const isLarge = is({ large: true });

const isAllPlatforms = isOption(
  isMobile,
  isTablet,
  isDesktop,
  isTouch,
  isWidescreen,
  isTabletOnly,
  isDesktopOnly
);
const isAlign = isOption(isLeft, isCentered, isRight);
const isSize = isOption(isSmall, isMedium, isLarge);

export function getAlignmentModifiers({ isAlign: align }: Bulma.Alignment) {
  return isAlign(align) ? { [`is-${align}`]: true } : {};
}

export function removeAlignmentProps(props: Bulma.Alignment) {
  const { isAlign, ...rest } = props;
  return rest;
}

export function getSizeModifiers({ isSize: size }: Bulma.Size) {
  return isSize(size) ? { [`is-${size}`]: true } : {};
}

export function removeSizeProps(props: Bulma.Size) {
  const { isSize, ...rest } = props;
  return rest;
}

function getFullWidthModifiers(props: Bulma.FullWidth) {
  return {
    "is-fullwidth": props.isFullWidth
  };
}

function removeFullWidthProps(props: Bulma.FullWidth) {
  const { isFullWidth, ...rest } = props;
  return rest;
}

export function getActiveModifiers(props: Bulma.Active) {
  return { "is-active": props.isActive };
}

export function removeActiveModifiers(props: Bulma.Active) {
  const { isActive, ...rest } = props;
  return rest;
}

export function getFocusedModifiers(props: Bulma.Focused) {
  return { "is-focused": props.isFocused };
}

export function removeFocusedModifiers(props: Bulma.Focused) {
  const { isFocused, ...rest } = props;
  return rest;
}

export function getHoveredModifiers(props: Bulma.Hovered) {
  return { "is-hovered": props.isHovered };
}

export function removeHoveredModifiers(props: Bulma.Hovered) {
  const { isHovered, ...rest } = props;
  return rest;
}

export function getStateModifiers(props: Bulma.State) {
  return {
    ...getActiveModifiers(props),
    ...getFocusedModifiers(props),
    ...getHoveredModifiers(props)
  };
}

export function removeStateProps(props: Bulma.State) {
  const { isActive, isFocused, isHovered, ...rest } = props;
  return rest;
}

export function getLoadingModifiers(props: Bulma.Loading) {
  return {
    "is-loading": props.isLoading
  };
}

export function removeLoadingProps(props: Bulma.Loading) {
  const { isLoading, ...rest } = props;
  return rest;
}

export function getColorModifiers({ isColor: color }: Bulma.Color) {
  return color ? { [`is-${color}`]: true } : {};
}

export function removeColorProps(props: Bulma.Color) {
  const { isColor, ...rest } = props;
  return rest;
}

const isValidHeading = isBetween(1, 6);

export function getHeadingModifiers({ isSpaced, isSize: size }: Bulma.Heading) {
  const isSize = isValidHeading(size) ? { [`is-${size}`]: true } : {};

  return {
    ...isSize,
    "is-spaced": isSpaced
  };
}

export function removeHeadingProps(props: Bulma.Heading) {
  const { isSize, isSpaced, ...rest } = props;
  return rest;
}

const isFlex = is({ flex: true });
const isBlock = is({ block: true });
const isInline = is({ inline: true });
const isInlineBlock = is({ "inline-block": true });
const isInlineFlex = is({ "inline-flex": true });

const isDisplay = isOption(
  isFlex,
  isBlock,
  isInline,
  isInlineBlock,
  isInlineFlex
);

const getShowModifiers = (
  display: Bulma.Displays | Bulma.Displays[] | Bulma.DisplayObject
) => {
  const isDefault = str => (str === "default" ? true : false);
  if (typeof display === "string") return { [`is-${display}`]: true };
  if (Array.isArray(display))
    return display.reduce(
      (acc, display) => ({ ...acc, [`is-${display}`]: true }),
      {}
    );
  if (typeof display === "object") {
    return Object.keys(display).reduce((acc, key) => {
      if (Array.isArray(display[key])) {
        return display[key].reduce((acc, display) => {
          if (isDefault(display)) return { ...acc, [`is-${key}`]: true };
          return { ...acc, [`is-${key}-${display}`]: true };
        }, acc);
      }
      if (isDefault(display[key])) return { ...acc, [`is-${key}`]: true };
      return isDisplay(key) && isAllPlatforms(display[key])
        ? { ...acc, [`is-${key}-${display[key]}`]: true }
        : acc;
    }, {});
  }
  return {};
};

const getHideModifiers = (
  platform: boolean | Bulma.AllPlatforms | Bulma.AllPlatforms[]
) => {
  if (typeof platform === "boolean")
    return platform ? { "is-hidden": true } : {};
  if (typeof platform === "string")
    return isAllPlatforms(platform) ? { [`is-hidden-${platform}`]: true } : {};
  if (Array.isArray(platform)) {
    return platform.reduce(
      (acc, platform) =>
        isAllPlatforms(platform)
          ? { ...acc, [`is-hidden-${platform}`]: true }
          : acc,
      {}
    );
  }
  return {};
};

const getAlignModifier = (modifier: string, helper: string) => {
  return isAlign(modifier) ? { [`${helper}-${modifier}`]: true } : {};
};

const getColorModifier = (modifier: string) => {
  return modifier ? { [`has-text-${modifier}`]: true } : {};
};

function getHelpersModifiers({
  isDisplay,
  isHidden,
  isPulled,
  isClearfix,
  isOverlay,
  isMarginless,
  isPaddingless,
  isUnselectable,
  hasTextAlign,
  hasTextColor
}: Bulma.Helpers) {
  return {
    ...getShowModifiers(isDisplay),
    ...getHideModifiers(isHidden),
    ...getAlignModifier(isPulled, "is-pulled"),
    ...getAlignModifier(hasTextAlign, "has-text"),
    ...getColorModifier(hasTextColor),
    "is-clearfix": isClearfix,
    "is-marginless": isMarginless,
    "is-overlay": isOverlay,
    "is-paddingless": isPaddingless,
    "is-unselectable": isUnselectable
  };
}

function removeHelpersProps(props: Bulma.Helpers) {
  const {
    isDisplay,
    isHidden,
    isClearfix,
    isPulled,
    isOverlay,
    isMarginless,
    isPaddingless,
    isUnselectable,
    hasTextAlign,
    hasTextColor,
    ...rest
  } = props;

  return rest;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name;
}

export function withHelpersModifiers<T>(Component: Bulma.Component<T>) {
  const SFC: React.SFC<
    T & React.HTMLProps<HTMLElement> & Bulma.Helpers
  > = props => {
    const className = classNames(
      {
        ...combineModifiers(props, getHelpersModifiers, getFullWidthModifiers)
      },
      props.className
    );

    const rest = getHTMLProps(props, removeHelpersProps, removeFullWidthProps);

    return className ? (
      <Component {...rest} className={className} />
    ) : (
      <Component {...rest} />
    );
  };

  SFC.displayName = `withHelpersModifiers(${getDisplayName(Component)})`;

  return SFC;
}
