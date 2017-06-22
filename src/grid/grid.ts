import { isMobile, isTablet, isDesktop, isWidescreen } from './../bulma';
import { isBetween, isOption } from './../helpers';

export declare namespace Grid {
    export type Sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    type Fractions = '3/4' | '2/3' | '1/2' | '1/3' | '1/4';
    type Width = 'full' | 'narrow';
    type AllSizes = Sizes | Fractions | Width;

    export interface SizeObject {
        mobile?: AllSizes;
        tablet?: AllSizes;
        desktop?: AllSizes;
        widescreen?: AllSizes;
        default?: AllSizes;
    }

    type Platforms = 'mobile' | 'tablet' | 'desktop';

    export interface HorizontalSize {
        isSize?: AllSizes | SizeObject;
    }

    export interface OffsetObject {
        mobile?: Sizes | Fractions;
        tablet?: Sizes | Fractions;
        desktop?: Sizes | Fractions;
        widescreen?: Sizes | Fractions;
        default?: Sizes | Fractions;
    }

    export interface Offset {
        isOffset?: Sizes | Fractions | OffsetObject,
    }

    export interface NonHTMLProps extends HorizontalSize, Offset {

    }
}

const isValidSize = isBetween(1, 12);
const isPlatform = isOption(isMobile, isTablet, isDesktop, isWidescreen);

export function getGridSizesModifiers(isSize, isOffset = false, platform: boolean | string = false) {
    return (Number.isInteger(isSize) && isValidSize(isSize)) ? { [`is-${isOffset ? 'offset-' : ''}${isSize}${isPlatform(platform) ? `-${platform}` : ''}`]: true } : {}
}

export function removeGridSizesProps(props) {
    const {
        isSize,
        ...rest } = props;
    return rest;
}

const fractions = {
    '3/4': 'three-quarters',
    '2/3': 'two-thirds',
    '1/2': 'half',
    '1/3': 'one-third',
    '1/4': 'one-quarter',
}
const width = {
    'full': 'full',
    'narrow': 'narrow',
}

function getGridFractionsModifiers(size, isOffset, platform) {
    const sizes = !isOffset ? { ...fractions, ...width } : fractions;

    return sizes[size] ? { [`is-${isOffset ? 'offset-' : ''}${sizes[size]}${isPlatform(platform) ? '-' + platform : ''}`]: true } : {}
}

function getGridObjectSizeModifiers(size, isOffset) {
    return Object.keys(size).reduce((acc, key) => {
        if (key === 'default') return { ...acc, ...getHorizontalSizeModifiers(size[key], isOffset) }
        return isPlatform(key) ? { ...acc, ...getHorizontalSizeModifiers(size[key], isOffset, key) } : acc;
    }, {});
}

function getHorizontalSizeModifiers(size, isOffset = false, platform: boolean | string = false) {
    if (typeof size === 'number') return getGridSizesModifiers(size, isOffset, platform);
    if (typeof size === 'string') return getGridFractionsModifiers(size, isOffset, platform);
    if (typeof size === 'object') return getGridObjectSizeModifiers(size, isOffset);
    return {};
}

export function getSizeModifiers(props) {
    return getHorizontalSizeModifiers(props.isSize);
}

export function removeSizeProps(props) {
    return removeGridSizesProps(props);
}

export function getOffsetModifiers(props) {
    return getHorizontalSizeModifiers(props.isOffset, true);
}

export function removeOffsetProps(props) {
    const {
        isOffset,
        ...rest } = props;
    return rest;
}