import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    isLeft, isCenter, isRight, removeAlignmentProps,
    withHelpersModifiers,
} from './../../bulma';
import { isOption, getHTMLProps } from './../../helpers'

export interface TabList<T> extends Bulma.Alignment, React.HTMLProps<T> {
    isAlign?: 'left' | 'center' | 'right',
}

export function TabList(props: TabList<HTMLUListElement>) {
    const isAlignOption = isOption(isLeft, isCenter, isRight);
    const className = classNames(
        {
            ...(isAlignOption(props.isAlign) ? {[`is-${props.isAlign}`]: true} : {})
        },
        props.className
    );

    const HTMLProps = getHTMLProps(props, removeAlignmentProps);

    return className ? <ul {...HTMLProps} className={className} /> : <ul {...HTMLProps}/>
}

export default withHelpersModifiers(TabList);