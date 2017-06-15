import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function PageList(props: React.HTMLProps<HTMLUListElement>) {
    const className = classNames('pagination-list', props.className);

    return (
        <ul {...props} className={className} />
    )
}

export default withHelpersModifiers(PageList);