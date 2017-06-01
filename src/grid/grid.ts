import { isBetween } from './../helpers';

export declare namespace Grid {
    type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

    export interface HorizontalSize {
        isSize?: ColumnSize,
    }

    export interface Size {
        isMobile?: ColumnSize,
        isTablet?: ColumnSize,
        isDesktop?: ColumnSize,

        isFull?: boolean,
        isFullMobile?: boolean,
        isFullTablet?: boolean,
        isFullDesktop?: boolean,

        isNarrow?: boolean,
        isNarrowMobile?: boolean,
        isNarrowTablet?: boolean,
        isNarrowDesktop?: boolean,

        isThreeQuarters?: boolean,
        isThreeQuartersMobile?: boolean,
        isThreeQuartersTablet?: boolean,
        isThreeQuartersDesktop?: boolean,

        isTwoThirds?: boolean,
        isTwoThirdsMobile?: boolean,
        isTwoThirdsTablet?: boolean,
        isTwoThirdsDesktop?: boolean,

        isHalf?: boolean,
        isHalfMobile?: boolean,
        isHalfTablet?: boolean,
        isHalfDesktop?: boolean,

        isOneThird?: boolean,
        isOneThirdMobile?: boolean,
        isOneThirdTablet?: boolean,
        isOneThirdDesktop?: boolean,

        isOneQuarter?: boolean,
        isOneQuarterMobile?: boolean,
        isOneQuarterTablet?: boolean,
        isOneQuarterDesktop?: boolean,
    }

    export interface Offset {
        isOffset?: ColumnSize,
        isOffsetMobile?: ColumnSize
        isOffsetTablet?: ColumnSize,
        isOffsetDesktop?: ColumnSize,

        isOffsetThreeQuarters?: boolean,
        isOffsetThreeQuartersMobile?: boolean,
        isOffsetThreeQuartersTablet?: boolean,
        isOffsetThreeQuartersDesktop?: boolean,

        isOffsetTwoThirds?: boolean,
        isOffsetTwoThirdsMobile?: boolean,
        isOffsetTwoThirdsTablet?: boolean,
        isOffsetTwoThirdsDesktop?: boolean,

        isOffsetHalf?: boolean,
        isOffsetHalfMobile?: boolean,
        isOffsetHalfTablet?: boolean,
        isOffsetHalfDesktop?: boolean,

        isOffsetOneThird?: boolean,
        isOffsetOneThirdMobile?: boolean,
        isOffsetOneThirdTablet?: boolean,
        isOffsetOneThirdDesktop?: boolean,

        isOffsetOneQuarter?: boolean,
        isOffsetOneQuarterMobile?: boolean,
        isOffsetOneQuarterTablet?: boolean,
        isOffsetOneQuarterDesktop?: boolean,
    }
}

const isValidSize = isBetween(1, 12);

export function getHorizontalSizeModifiers({ isSize: size }: Grid.HorizontalSize) {
    return (Number.isInteger(size) && isValidSize(size)) ? { [`is-${size}`]: true } : {}
}

export function removeHorizontalSizeProps(props: Grid.HorizontalSize) {
    const {
        isSize,
        ...rest } = props;
    return rest;
}

const isValidAndDefined = (size) => Number.isInteger(size) ? isValidSize(size) : undefined;

export function getSizeModifiers(props: Grid.Size): object {
    return {
        [`is-${props.isMobile}-mobile`]: isValidAndDefined(props.isMobile),
        [`is-${props.isTablet}-tablet`]: isValidAndDefined(props.isTablet),
        [`is-${props.isDesktop}-desktop`]: isValidAndDefined(props.isDesktop),

        'is-full': props.isFull,
        'is-full-mobile': props.isFullMobile,
        'is-full-tablet': props.isFullTablet,
        'is-full-desktop': props.isFullDesktop,

        'is-narrow': props.isNarrow,
        'is-narrow-mobile': props.isNarrowMobile,
        'is-narrow-tablet': props.isNarrowTablet,
        'is-narrow-desktop': props.isNarrowDesktop,

        'is-three-quarters': props.isThreeQuarters,
        'is-three-quarters-mobile': props.isThreeQuartersMobile,
        'is-three-quarters-tablet': props.isThreeQuartersTablet,
        'is-three-quarters-desktop': props.isThreeQuartersDesktop,

        'is-two-thirds': props.isTwoThirds,
        'is-two-thirds-mobile': props.isTwoThirdsMobile,
        'is-two-thirds-tablet': props.isTwoThirdsTablet,
        'is-two-thirds-desktop': props.isTwoThirdsDesktop,

        'is-half': props.isHalf,
        'is-half-mobile': props.isHalfMobile,
        'is-half-tablet': props.isHalfTablet,
        'is-half-desktop': props.isHalfDesktop,

        'is-one-third': props.isOneThird,
        'is-one-third-mobile': props.isOneThirdMobile,
        'is-one-third-tablet': props.isOneThirdTablet,
        'is-one-third-desktop': props.isOneThirdDesktop,

        'is-one-quarter': props.isOneQuarter,
        'is-one-quarter-mobile': props.isOneQuarterMobile,
        'is-one-quarter-tablet': props.isOneQuarterTablet,
        'is-one-quarter-desktop': props.isOneQuarterDesktop,
    }
}

export function removeSizeProps(props: Grid.Size) {
    const {
        isMobile,
        isTablet,
        isDesktop,
        isFull,
        isFullMobile,
        isFullTablet,
        isFullDesktop,
        isNarrow,
        isNarrowMobile,
        isNarrowTablet,
        isNarrowDesktop,
        isThreeQuarters,
        isThreeQuartersMobile,
        isThreeQuartersTablet,
        isThreeQuartersDesktop,
        isTwoThirds,
        isTwoThirdsMobile,
        isTwoThirdsTablet,
        isTwoThirdsDesktop,
        isHalf,
        isHalfMobile,
        isHalfTablet,
        isHalfDesktop,
        isOneThird,
        isOneThirdMobile,
        isOneThirdTablet,
        isOneThirdDesktop,
        isOneQuarter,
        isOneQuarterMobile,
        isOneQuarterTablet,
        isOneQuarterDesktop,
        ...rest } = props;

    return rest;
}

export function getOffsetModifiers(props: Grid.Offset) {
    return {
        [`is-offset-${props.isOffset}`]: isValidSize(props.isOffset),
        [`is-offset-${props.isOffsetMobile}-mobile`]: isValidAndDefined(props.isOffsetMobile),
        [`is-offset-${props.isOffsetTablet}-tablet`]: isValidAndDefined(props.isOffsetTablet),
        [`is-offset-${props.isOffsetDesktop}-desktop`]: isValidAndDefined(props.isOffsetDesktop),

        'is-offset-three-quarters': props.isOffsetThreeQuarters,
        'is-offset-three-quarters-mobile': props.isOffsetThreeQuartersMobile,
        'is-offset-three-quarters-tablet': props.isOffsetThreeQuartersTablet,
        'is-offset-three-quarters-desktop': props.isOffsetThreeQuartersDesktop,

        'is-offset-two-thirds': props.isOffsetTwoThirds,
        'is-offset-two-thirds-mobile': props.isOffsetTwoThirdsMobile,
        'is-offset-two-thirds-tablet': props.isOffsetTwoThirdsTablet,
        'is-offset-two-thirds-desktop': props.isOffsetTwoThirdsDesktop,

        'is-offset-half': props.isOffsetHalf,
        'is-offset-half-mobile': props.isOffsetHalfMobile,
        'is-offset-half-tablet': props.isOffsetHalfTablet,
        'is-offset-half-desktop': props.isOffsetHalfDesktop,

        'is-offset-one-third': props.isOffsetOneThird,
        'is-offset-one-third-mobile': props.isOffsetOneThirdMobile,
        'is-offset-one-third-tablet': props.isOffsetOneThirdTablet,
        'is-offset-one-third-desktop': props.isOffsetOneThirdDesktop,

        'is-offset-one-quarter': props.isOffsetOneQuarter,
        'is-offset-one-quarter-mobile': props.isOffsetOneQuarterMobile,
        'is-offset-one-quarter-tablet': props.isOffsetOneQuarterTablet,
        'is-offset-one-quarter-desktop': props.isOffsetOneQuarterDesktop,
    }
}

export function removeOffsetProps(props: Grid.Offset) {
    const {
        isOffset,
        isOffsetMobile,
        isOffsetTablet,
        isOffsetDesktop,
        isOffsetThreeQuarters,
        isOffsetThreeQuartersMobile,
        isOffsetThreeQuartersTablet,
        isOffsetThreeQuartersDesktop,
        isOffsetTwoThirds,
        isOffsetTwoThirdsMobile,
        isOffsetTwoThirdsTablet,
        isOffsetTwoThirdsDesktop,
        isOffsetHalf,
        isOffsetHalfMobile,
        isOffsetHalfTablet,
        isOffsetHalfDesktop,
        isOffsetOneThird,
        isOffsetOneThirdMobile,
        isOffsetOneThirdTablet,
        isOffsetOneThirdDesktop,
        isOffsetOneQuarter,
        isOffsetOneQuarterMobile,
        isOffsetOneQuarterTablet,
        isOffsetOneQuarterDesktop,
        ...rest } = props;
    return rest;
}