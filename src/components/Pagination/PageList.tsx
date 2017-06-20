import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PageList<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function PageList({ tag = 'ul', ...props }: PageList<HTMLElement>) {
    const className = classNames('pagination-list', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PageList);
export default HOC;
