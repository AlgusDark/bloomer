import { Bulma } from './bulma';

export function getHTMLProps(
  props: object,
  ...args: Function[]
): React.HTMLProps<HTMLElement> {
  return args.length > 0
    ? args.reduce((rest, fn) => ({ ...fn(rest) }), props)
    : props;
}

export function combineModifiers(props: object, ...args: Function[]): object {
  return args.length > 0
    ? args.reduce((rest, fn) => ({ ...rest, ...fn(props) }), {})
    : {};
}

export const isBetween = (min: number, max: number) => (value: number) =>
  value >= min && value <= max;
export const is = (options: object) => (str: string): boolean =>
  options[str] || false;
export const isOption = (...fn: Function[]) => (str: string | boolean) =>
  fn.some(option => option(str));
