import { isMobile, isTablet, isDesktop } from './../bulma';
import { isBetween, isOption } from './../helpers';

export declare namespace Grid {
    type Sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    type Platforms = 'mobile' | 'tablet' | 'desktop';

    export interface HorizontalSize {
        isSize?: Sizes,
    }

    export interface Size {
        isMobile?: Sizes,
        isTablet?: Sizes,
        isDesktop?: Sizes,

        isFull?: boolean | Platforms | Platforms[],

        isNarrow?: boolean | Platforms | Platforms[],

        isThreeQuarters?: boolean | Platforms | Platforms[],

        isTwoThirds?: boolean | Platforms | Platforms[],

        isHalf?: boolean | Platforms | Platforms[],

        isOneThird?: boolean | Platforms | Platforms[],

        isOneQuarter?: boolean | Platforms | Platforms[],
    }

    export interface Offset {
        isOffset?: Sizes,
        isOffsetMobile?: Sizes,
        isOffsetTablet?: Sizes,
        isOffsetDesktop?: Sizes,

        isOffsetThreeQuarters?: boolean | Platforms | Platforms[],

        isOffsetTwoThirds?: boolean | Platforms | Platforms[],

        isOffsetHalf?: boolean | Platforms | Platforms[],

        isOffsetOneThird?: boolean | Platforms | Platforms[],

        isOffsetOneQuarter?: boolean | Platforms | Platforms[],
    }

    export interface NonHTMLProps extends HorizontalSize, Size, Offset {

    }
}

const isValidSize = isBetween(1, 12);
const isPlatform = isOption(isMobile, isTablet, isDesktop);

export function getHorizontalSizeModifiers({ isSize: size }: Grid.HorizontalSize) {
    return (Number.isInteger(size) && isValidSize(size)) ? { [`is-${size}`]: true } : {}
}

export function removeHorizontalSizeProps(props: Grid.HorizontalSize) {
    const {
        isSize,
        ...rest } = props;
    return rest;
}

const isValidAndInteger = (size) => Number.isInteger(size) ? isValidSize(size) : false;

const getModifier = (modifier: boolean | Grid.Platforms | Grid.Platforms[], helper: string) => {
    if (modifier === true) {
        return { [`is-${helper}`]: true };
    }
    else if (typeof modifier === 'string') {
        return isPlatform(modifier) ? { [`is-${helper}-${modifier}`]: true } : {};
    }
    else if (Array.isArray(modifier)) {
        return modifier.map(str => str.toLowerCase().trim())
            .reduce((init, option) => isPlatform(option) ? { ...init, [`is-${helper}-${option}`]: true } : init, {});
    }
    return {};
}

export function getSizeModifiers(props: Grid.Size): object {
    const platformSize = {
        ...(isValidAndInteger(props.isMobile) ? { [`is-${props.isMobile}-mobile`]: true } : {}),
        ...(isValidAndInteger(props.isTablet) ? { [`is-${props.isTablet}-tablet`]: true } : {}),
        ...(isValidAndInteger(props.isDesktop) ? { [`is-${props.isDesktop}-desktop`]: true } : {}),
    }

    return {
        ...platformSize,
        ...getModifier(props.isFull, 'full'),
        ...getModifier(props.isNarrow, 'narrow'),
        ...getModifier(props.isThreeQuarters, 'three-quarters'),
        ...getModifier(props.isTwoThirds, 'two-thirds'),
        ...getModifier(props.isHalf, 'half'),
        ...getModifier(props.isOneThird, 'one-third'),
        ...getModifier(props.isOneQuarter, 'one-quarter'),
    }
}

export function removeSizeProps(props: Grid.Size) {
    const {
        isMobile,
        isTablet,
        isDesktop,
        isFull,
        isNarrow,
        isThreeQuarters,
        isTwoThirds,
        isHalf,
        isOneThird,
        isOneQuarter,
        ...rest } = props;

    return rest;
}

export function getOffsetModifiers(props: Grid.Offset) {
    const platformSize = {
        ...(isValidSize(props.isOffset) ? { [`is-offset-${props.isOffset}`]: true } : {}),
        ...(isValidAndInteger(props.isOffsetMobile) ? { [`is-offset-${props.isOffsetMobile}-mobile`]: true } : {}),
        ...(isValidAndInteger(props.isOffsetTablet) ? { [`is-offset-${props.isOffsetTablet}-tablet`]: true } : {}),
        ...(isValidAndInteger(props.isOffsetDesktop) ? { [`is-offset-${props.isOffsetDesktop}-desktop`]: true } : {}),
    }

    return {
        ...platformSize,
        ...getModifier(props.isOffsetThreeQuarters, 'offset-three-quarters'),
        ...getModifier(props.isOffsetTwoThirds, 'offset-two-thirds'),
        ...getModifier(props.isOffsetHalf, 'offset-half'),
        ...getModifier(props.isOffsetOneThird, 'offset-one-third'),
        ...getModifier(props.isOffsetOneQuarter, 'offset-one-quarter'),
    }
}

export function removeOffsetProps(props: Grid.Offset) {
    const {
        isOffset,
        isOffsetMobile,
        isOffsetTablet,
        isOffsetDesktop,
        isOffsetThreeQuarters,
        isOffsetTwoThirds,
        isOffsetHalf,
        isOffsetOneThird,
        isOffsetOneQuarter,
        ...rest } = props;
    return rest;
}