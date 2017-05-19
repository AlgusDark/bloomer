import * as classnames from 'classnames';

import { Bulma, getModifiersClasses } from './bulma';

export function withModifiers(props: Bulma.NonHTMLProps<HTMLElement>, obj = {}) {
    return [
        {
            ...obj,
            ...getModifiersClasses(props),
        },
        props.className
    ]
}

export function classNames(props: Bulma.NonHTMLProps<HTMLElement>, obj = {}): string | undefined {
    return classnames(withModifiers(props, obj)) || undefined;
}

export function getHTMLProps(props, ...args: Array<Function>): React.HTMLProps<HTMLElement> {
    if (args.length > 0) return args.reduce((rest, fn) => ({ ...fn(rest) }), props)

    return props;
}