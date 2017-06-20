import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface MediaContent<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function MediaContent({ tag = 'div', ...props }: MediaContent<HTMLElement>) {
    const className = classNames('media-content', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(MediaContent);
export default HOC;
