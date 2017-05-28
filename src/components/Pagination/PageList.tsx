import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const PageList: React.SFC<React.HTMLProps<HTMLUListElement>> = (props) => {
    const className = classNames('pagination-list', props.className);

    return (
        <ul {...props} className={className} />
    )
}

export default withHelpersModifiers(PageList);