import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Footer<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function Footer({ tag = 'footer', ...props }: Footer<HTMLElement>) {
    const className = classNames('footer', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Footer);
export default HOC;
