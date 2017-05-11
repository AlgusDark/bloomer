import * as classes from 'classnames';

import { Bulma, getModifiersClasses, getBulmaClasses } from './bulma';

export function withModifiers(props: Bulma.NonHTMLProps<HTMLElement>, obj = {}) {
    return [
        {
            ...obj,
            ...getModifiersClasses(props),
            ...getBulmaClasses(props),
        },
        props.className
    ]
}

export function classNames(props: Bulma.NonHTMLProps<HTMLElement>, obj = {}): string | undefined {
    return classes(withModifiers(props, obj)) || undefined;
}

export function getHTMLProps(props: Bulma.NonHTMLProps<HTMLElement>): React.HTMLProps<HTMLElement> {
    const {
        // Extra helpers
        render,
        isAnchor,
        // Alignment
        isCentered,
        isRight,
        // Size
        isSmall,
        isMedium,
        isLarge,
        // FullWidth
        isFullwidth,
        // State
        isActive,
        isFocused,
        isHovered,
        isLoading,
        // Color
        isWhite,
        isLight,
        isDark,
        isBlack,
        isPrimary,
        isInfo,
        isSuccess,
        isWarning,
        isDanger,
        // Control
        hasIcons,
        hasIconsLeft,
        hasIconsRight,
        isExpanded,
        // Button
        isLink,
        isOutlined,
        isInverted,
        // Tabs
        isBoxed,
        isToggle,
        // PageLink
        isCurrent,
        // PageControl
        isPrevious,
        isNext,
        // Field
        isGrouped,
        isGroupedCentered,
        isGroupedRight,
        // HTMLProps
        ...rest,
    } = props;

    return rest;
}