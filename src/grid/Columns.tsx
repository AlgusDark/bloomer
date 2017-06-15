import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Columns<T> extends React.HTMLProps<T> {
    isMobile?: boolean,
    isDesktop?: boolean,
    isGapless?: boolean,
    isGrid?: boolean,
    isMultiline?: boolean,
    isVCentered?: boolean,
    isCentered?: boolean,
}

export function Columns(props: Columns<HTMLDivElement>) {
    const className = classNames(
        'columns',
        {
            'is-mobile': props.isMobile,
            'is-desktop': props.isDesktop,
            'is-gapless': props.isGapless,
            'is-grid': props.isGrid,
            'is-multiline': props.isMultiline,
            'is-vcentered': props.isVCentered,
            'is-centered': props.isCentered,
        },
        props.className
    );
    const {
        isMobile,
        isDesktop,
        isGapless,
        isGrid,
        isMultiline,
        isVCentered,
        isCentered,
        ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Columns);