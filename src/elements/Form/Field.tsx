import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Field<T> extends React.HTMLProps<T> {
    isGrouped?: boolean,
    isGroupedRight?: boolean,
    isGroupedCentered?: boolean,
    hasAddons?: boolean,
    hasAddonsCentered?: boolean,
    hasAddonsRight?: boolean,
    hasAddonsFullWidth?: boolean,
}

export const Field: React.SFC<Field<HTMLDivElement>> = (props) => {
    const className = classNames(
        'field',
        {
            'is-grouped': props.isGrouped,
            'is-grouped-right': props.isGroupedRight,
            'is-grouped-centered': props.isGroupedCentered,
            'has-addons': props.hasAddons,
            'has-addons has-addons-centered': props.hasAddonsCentered,
            'has-addons has-addons-right': props.hasAddonsRight,
            'has-addons has-addons-fullwidth': props.hasAddonsFullWidth,
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
        ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Field);