import * as classNames from "classnames";
import * as React from "react";

import {
  Bulma,
  getColorModifiers,
  getSizeModifiers,
  getStateModifiers,
  removeColorProps,
  removeSizeProps,
  removeStateProps,
  withHelpersModifiers
} from "./../../bulma";
import { combineModifiers, getHTMLProps } from "./../../helpers";

export interface InputProps<T>
  extends Bulma.Color,
    Bulma.Size,
    Bulma.State,
    React.HTMLProps<T> {}

export class Input extends React.Component<InputProps<HTMLElement>, {}> {
  render() {
    const className = classNames(
      "input",
      {
        ...combineModifiers(
          this.props,
          getColorModifiers,
          getSizeModifiers,
          getStateModifiers
        )
      },
      this.props.className
    );

    const HTMLProps = getHTMLProps(
      this.props,
      removeColorProps,
      removeSizeProps,
      removeStateProps
    );

    return (
      <input
        {...HTMLProps}
        className={className}
        type={this.props.type || "text"}
      />
    );
  }
}

const HOC = /*@__PURE__*/ withHelpersModifiers(Input);
export default HOC;
