import { Bulma } from './bulma';

export function getHTMLProps(props: Bulma.NonHTMLProps<HTMLElement>, ...args: Array<Function>): React.HTMLProps<HTMLElement> {
    return args.length > 0 ? args.reduce((rest, fn) => ({ ...fn(rest) }), props) : props
}

export function combineModifiers(props: Bulma.NonHTMLProps<HTMLElement>, ...args: Array<Function>): object {
    return args.length > 0 ? args.reduce((rest, fn) => ({...rest, ...fn(props) }), {}) : {};
}