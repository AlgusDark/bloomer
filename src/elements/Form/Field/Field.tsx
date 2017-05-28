import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface Field<T> extends React.HTMLProps<T> {
    isGrouped?: boolean,
    isGroupedRight?: boolean,
    isGroupedCentered?: boolean,
    hasAddons?: boolean,
    hasAddonsCentered?: boolean,
    hasAddonsRight?: boolean,
    hasAddonsFullWidth?: boolean,
    isHorizontal?: boolean,
}

export const Field: React.SFC<Field<HTMLDivElement>> = (props) => {
    const className = classNames(
        'field',
        {
            'is-grouped': props.isGrouped,
            'is-grouped is-grouped-right': props.isGroupedRight,
            'is-grouped is-grouped-centered': props.isGroupedCentered,
            'has-addons': props.hasAddons,
            'has-addons has-addons-centered': props.hasAddonsCentered,
            'has-addons has-addons-right': props.hasAddonsRight,
            'has-addons has-addons-fullwidth': props.hasAddonsFullWidth,
            'is-horizontal': props.isHorizontal,
        },
        props.className);
    const {
        isGrouped,
        isGroupedRight,
        isGroupedCentered,
        hasAddons,
        hasAddonsCentered,
        hasAddonsRight,
        hasAddonsFullWidth,
        isHorizontal,
        ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Field);