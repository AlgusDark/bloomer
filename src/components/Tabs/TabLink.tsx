import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface TabLink<T> extends Bulma.Render, Bulma.Tag,  React.HTMLProps<T> { }

export function TabLink({ tag = 'a', render, ...props }: TabLink<HTMLElement>) {
    if (render) return render({ ...props });

    return React.createElement(tag, props);
}

const HOC = /*@__PURE__*/withHelpersModifiers(TabLink);
export default HOC;
