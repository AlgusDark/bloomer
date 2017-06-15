import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function MenuList(props: React.HTMLProps<HTMLUListElement>) {
    const className = classNames('menu-list', props.className);

    return (
        <ul {...props} className={className} />
    )
}

export default withHelpersModifiers(MenuList);