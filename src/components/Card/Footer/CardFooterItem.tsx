import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface CardFooterItem<T> extends Bulma.Render, Bulma.Tag, React.HTMLProps<T> { }

export function CardFooterItem({ tag = 'p', render, ...props }: CardFooterItem<HTMLElement>) {
    const className = classNames('card-footer-item', props.className);

    if (render) return render({ ...props, className });

    return React.createElement((props.href ? 'a' : tag), { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardFooterItem);
export default HOC;
