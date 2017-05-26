import * as React from 'react';
import * as Grid from './../../src/grid/grid';

describe('removeProps functions', () => {
    const props = {
        href: '#',
        onClick: f => f,
    }

    it('should remove Grid.HorizontalSize props', () => {
        const horizontalSizeProps = {
            is1: true,
            is2: true,
            is3: true,
            is4: true,
            is5: true,
            is6: true,
            is7: true,
            is8: true,
            is9: true,
            is10: true,
            is11: true,
            is12: true,
        }
        expect(Grid.removeHorizontalSizeProps({ ...props, ...horizontalSizeProps }))
            .toEqual(props);
    });

    it('should remove Grid.Size props', () => {
        const sizeProps = {
            isFull: true,
            isNarrow: true,
            isThreeQuarters: true,
            isTwoThirds: true,
            IsHalf: true,
            isOneThird: true,
            isOneQuarter: true,
        }
        expect(Grid.removeSizeProps({ ...props, ...sizeProps }))
            .toEqual(props);
    });

    it('should remove Grid.Offset props', () => {
        const offsetProps = {
            isOffsetThreeQuarters: true,
            isOffsetTwoThirds: true,
            IsOffsetHalf: true,
            isOffsetOneThird: true,
            isOffsetOneQuarter: true,
            isOffset1: true,
            isOffset2: true,
            isOffset3: true,
            isOffset4: true,
            isOffset5: true,
            isOffset6: true,
            isOffset7: true,
            isOffset8: true,
            isOffset9: true,
            isOffset10: true,
            isOffset11: true,
            isOffset12: true,
        }
        expect(Grid.removeOffsetProps({ ...props, ...offsetProps }))
            .toEqual(props);
    });

    it('should remove Grid.Mobile props', () => {
        const mobileProps = {
            isFullMobile: true,
            isNarrowMobile: true,
            isThreeQuartersMobile: true,
            isTwoThirdsMobile: true,
            IsHalfMobile: true,
            isOneThirdMobile: true,
            isOneQuarterMobile: true,
            is1Mobile: true,
            is2Mobile: true,
            is3Mobile: true,
            is4Mobile: true,
            is5Mobile: true,
            is6Mobile: true,
            is7Mobile: true,
            is8Mobile: true,
            is9Mobile: true,
            is10Mobile: true,
            is11Mobile: true,
            is12Mobile: true,
            isOffsetThreeQuartersMobile: true,
            isOffsetTwoThirdsMobile: true,
            IsOffsetHalfMobile: true,
            isOffsetOneThirdMobile: true,
            isOffsetOneQuarterMobile: true,
            isOffset1Mobile: true,
            isOffset2Mobile: true,
            isOffset3Mobile: true,
            isOffset4Mobile: true,
            isOffset5Mobile: true,
            isOffset6Mobile: true,
            isOffset7Mobile: true,
            isOffset8Mobile: true,
            isOffset9Mobile: true,
            isOffset10Mobile: true,
            isOffset11Mobile: true,
            isOffset12Mobile: true,
        }
        expect(Grid.removeMobileProps({ ...props, ...mobileProps }))
            .toEqual(props);
    });

    it('should remove Grid.Tablet props', () => {
        const tabletProps = {
            isFullTablet: true,
            isNarrowTablet: true,
            isThreeQuartersTablet: true,
            isTwoThirdsTablet: true,
            IsHalfTablet: true,
            isOneThirdTablet: true,
            isOneQuarterTablet: true,
            is1Tablet: true,
            is2Tablet: true,
            is3Tablet: true,
            is4Tablet: true,
            is5Tablet: true,
            is6Tablet: true,
            is7Tablet: true,
            is8Tablet: true,
            is9Tablet: true,
            is10Tablet: true,
            is11Tablet: true,
            is12Tablet: true,
            isOffsetThreeQuartersTablet: true,
            isOffsetTwoThirdsTablet: true,
            IsOffsetHalfTablet: true,
            isOffsetOneThirdTablet: true,
            isOffsetOneQuarterTablet: true,
            isOffset1Tablet: true,
            isOffset2Tablet: true,
            isOffset3Tablet: true,
            isOffset4Tablet: true,
            isOffset5Tablet: true,
            isOffset6Tablet: true,
            isOffset7Tablet: true,
            isOffset8Tablet: true,
            isOffset9Tablet: true,
            isOffset10Tablet: true,
            isOffset11Tablet: true,
            isOffset12Tablet: true,
        }
        expect(Grid.removeTabletProps({ ...props, ...tabletProps }))
            .toEqual(props);
    });

    it('should remove Grid.Desktop props', () => {
        const desktopProps = {
            isFullDesktop: true,
            isNarrowDesktop: true,
            isThreeQuartersDesktop: true,
            isTwoThirdsDesktop: true,
            IsHalfDesktop: true,
            isOneThirdDesktop: true,
            isOneQuarterDesktop: true,
            is1Desktop: true,
            is2Desktop: true,
            is3Desktop: true,
            is4Desktop: true,
            is5Desktop: true,
            is6Desktop: true,
            is7Desktop: true,
            is8Desktop: true,
            is9Desktop: true,
            is10Desktop: true,
            is11Desktop: true,
            is12Desktop: true,
            isOffsetThreeQuartersDesktop: true,
            isOffsetTwoThirdsDesktop: true,
            IsOffsetHalfDesktop: true,
            isOffsetOneThirdDesktop: true,
            isOffsetOneQuarterDesktop: true,
            isOffset1Desktop: true,
            isOffset2Desktop: true,
            isOffset3Desktop: true,
            isOffset4Desktop: true,
            isOffset5Desktop: true,
            isOffset6Desktop: true,
            isOffset7Desktop: true,
            isOffset8Desktop: true,
            isOffset9Desktop: true,
            isOffset10Desktop: true,
            isOffset11Desktop: true,
            isOffset12Desktop: true,
        }
        expect(Grid.removeDesktopProps({ ...props, ...desktopProps }))
            .toEqual(props);
    });
});

describe('get*Modifiers functions', () => {
    it('should getHorizontalSizeModifiers', () => {
        const props = {
            is1: true,
            is2: true,
            is3: true,
            is4: true,
            is5: true,
            is6: true,
            is7: true,
            is8: true,
            is9: true,
            is10: true,
            is11: true,
            is12: true,
        }
        const expected = {
            'is-1': true,
            'is-2': true,
            'is-3': true,
            'is-4': true,
            'is-5': true,
            'is-6': true,
            'is-7': true,
            'is-8': true,
            'is-9': true,
            'is-10': true,
            'is-11': true,
            'is-12': true,
        }

        expect(Grid.getHorizontalSizeModifiers(props))
            .toEqual(expected);
    });

    it('should getSizeModifiers', () => {
        const props = {
            isFull: true,
            isNarrow: true,
            isThreeQuarters: true,
            isTwoThirds: true,
            IsHalf: true,
            isOneThird: true,
            isOneQuarter: true,
        }
        const expected = {
            'is-full': true,
            'is-narrow': true,
            'is-three-quarters': true,
            'is-two-thirds': true,
            'is-half': true,
            'is-one-third': true,
            'is-one-quarter': true,
        }

        expect(Grid.getSizeModifiers(props))
            .toEqual(expected);
    });

    it('should getOffsetModifiers', () => {
        const props = {
            isOffsetThreeQuarters: true,
            isOffsetTwoThirds: true,
            IsOffsetHalf: true,
            isOffsetOneThird: true,
            isOffsetOneQuarter: true,
            isOffset1: true,
            isOffset2: true,
            isOffset3: true,
            isOffset4: true,
            isOffset5: true,
            isOffset6: true,
            isOffset7: true,
            isOffset8: true,
            isOffset9: true,
            isOffset10: true,
            isOffset11: true,
            isOffset12: true,
        }
        const expected = {
            'is-offset-three-quarters': true,
            'is-offset-two-thirds': true,
            'is-offset-half': true,
            'is-offset-one-third': true,
            'is-offset-one-quarter': true,
            'is-offset-1': true,
            'is-offset-2': true,
            'is-offset-3': true,
            'is-offset-4': true,
            'is-offset-5': true,
            'is-offset-6': true,
            'is-offset-7': true,
            'is-offset-8': true,
            'is-offset-9': true,
            'is-offset-10': true,
            'is-offset-11': true,
            'is-offset-12': true,
        }

        expect(Grid.getOffsetModifiers(props))
            .toEqual(expected);
    });

    it('should getMobileModifiers', () => {
        const props = {
            isFullMobile: true,
            isNarrowMobile: true,
            isThreeQuartersMobile: true,
            isTwoThirdsMobile: true,
            IsHalfMobile: true,
            isOneThirdMobile: true,
            isOneQuarterMobile: true,
            is1Mobile: true,
            is2Mobile: true,
            is3Mobile: true,
            is4Mobile: true,
            is5Mobile: true,
            is6Mobile: true,
            is7Mobile: true,
            is8Mobile: true,
            is9Mobile: true,
            is10Mobile: true,
            is11Mobile: true,
            is12Mobile: true,
            isOffsetThreeQuartersMobile: true,
            isOffsetTwoThirdsMobile: true,
            IsOffsetHalfMobile: true,
            isOffsetOneThirdMobile: true,
            isOffsetOneQuarterMobile: true,
            isOffset1Mobile: true,
            isOffset2Mobile: true,
            isOffset3Mobile: true,
            isOffset4Mobile: true,
            isOffset5Mobile: true,
            isOffset6Mobile: true,
            isOffset7Mobile: true,
            isOffset8Mobile: true,
            isOffset9Mobile: true,
            isOffset10Mobile: true,
            isOffset11Mobile: true,
            isOffset12Mobile: true,
        }
        const expected = {
            'is-full-mobile': true,
            'is-narrow-mobile':true,
            'is-three-quarters-mobile': true,
            'is-two-thirds-mobile': true,
            'is-half-mobile': true,
            'is-one-third-mobile': true,
            'is-one-quarter-mobile': true,
            'is-1-mobile': true,
            'is-2-mobile': true,
            'is-3-mobile': true,
            'is-4-mobile': true,
            'is-5-mobile': true,
            'is-6-mobile': true,
            'is-7-mobile': true,
            'is-8-mobile': true,
            'is-9-mobile': true,
            'is-10-mobile': true,
            'is-11-mobile': true,
            'is-12-mobile': true,
            'is-offset-three-quarters-mobile': true,
            'is-offset-two-thirds-mobile': true,
            'is-offset-half-mobile': true,
            'is-offset-one-third-mobile': true,
            'is-offset-one-quarter-mobile': true,
            'is-offset-1-mobile': true,
            'is-offset-2-mobile': true,
            'is-offset-3-mobile': true,
            'is-offset-4-mobile': true,
            'is-offset-5-mobile': true,
            'is-offset-6-mobile': true,
            'is-offset-7-mobile': true,
            'is-offset-8-mobile': true,
            'is-offset-9-mobile': true,
            'is-offset-10-mobile': true,
            'is-offset-11-mobile': true,
            'is-offset-12-mobile': true,
        }

        expect(Grid.getMobileModifiers(props))
            .toEqual(expected);
    });

    it('should getTabletModifiers', () => {
        const props = {
            isFullTablet: true,
            isNarrowTablet: true,
            isThreeQuartersTablet: true,
            isTwoThirdsTablet: true,
            IsHalfTablet: true,
            isOneThirdTablet: true,
            isOneQuarterTablet: true,
            is1Tablet: true,
            is2Tablet: true,
            is3Tablet: true,
            is4Tablet: true,
            is5Tablet: true,
            is6Tablet: true,
            is7Tablet: true,
            is8Tablet: true,
            is9Tablet: true,
            is10Tablet: true,
            is11Tablet: true,
            is12Tablet: true,
            isOffsetThreeQuartersTablet: true,
            isOffsetTwoThirdsTablet: true,
            IsOffsetHalfTablet: true,
            isOffsetOneThirdTablet: true,
            isOffsetOneQuarterTablet: true,
            isOffset1Tablet: true,
            isOffset2Tablet: true,
            isOffset3Tablet: true,
            isOffset4Tablet: true,
            isOffset5Tablet: true,
            isOffset6Tablet: true,
            isOffset7Tablet: true,
            isOffset8Tablet: true,
            isOffset9Tablet: true,
            isOffset10Tablet: true,
            isOffset11Tablet: true,
            isOffset12Tablet: true,
        }
        const expected = {
            'is-full-tablet': true,
            'is-narrow-tablet': true,
            'is-three-quarters-tablet': true,
            'is-two-thirds-tablet': true,
            'is-half-tablet': true,
            'is-one-third-tablet': true,
            'is-one-quarter-tablet': true,
            'is-1-tablet': true,
            'is-2-tablet': true,
            'is-3-tablet': true,
            'is-4-tablet': true,
            'is-5-tablet': true,
            'is-6-tablet': true,
            'is-7-tablet': true,
            'is-8-tablet': true,
            'is-9-tablet': true,
            'is-10-tablet': true,
            'is-11-tablet': true,
            'is-12-tablet': true,
            'is-offset-three-quarters-tablet': true,
            'is-offset-two-thirds-tablet': true,
            'is-offset-half-tablet': true,
            'is-offset-one-third-tablet': true,
            'is-offset-one-quarter-tablet': true,
            'is-offset-1-tablet': true,
            'is-offset-2-tablet': true,
            'is-offset-3-tablet': true,
            'is-offset-4-tablet': true,
            'is-offset-5-tablet': true,
            'is-offset-6-tablet': true,
            'is-offset-7-tablet': true,
            'is-offset-8-tablet': true,
            'is-offset-9-tablet': true,
            'is-offset-10-tablet': true,
            'is-offset-11-tablet': true,
            'is-offset-12-tablet': true,
        }

        expect(Grid.getTabletModifiers(props))
            .toEqual(expected);
    });

    it('should getDesktopModifiers', () => {
        const props = {
            isFullDesktop: true,
            isNarrowDesktop: true,
            isThreeQuartersDesktop: true,
            isTwoThirdsDesktop: true,
            IsHalfDesktop: true,
            isOneThirdDesktop: true,
            isOneQuarterDesktop: true,
            is1Desktop: true,
            is2Desktop: true,
            is3Desktop: true,
            is4Desktop: true,
            is5Desktop: true,
            is6Desktop: true,
            is7Desktop: true,
            is8Desktop: true,
            is9Desktop: true,
            is10Desktop: true,
            is11Desktop: true,
            is12Desktop: true,
            isOffsetThreeQuartersDesktop: true,
            isOffsetTwoThirdsDesktop: true,
            IsOffsetHalfDesktop: true,
            isOffsetOneThirdDesktop: true,
            isOffsetOneQuarterDesktop: true,
            isOffset1Desktop: true,
            isOffset2Desktop: true,
            isOffset3Desktop: true,
            isOffset4Desktop: true,
            isOffset5Desktop: true,
            isOffset6Desktop: true,
            isOffset7Desktop: true,
            isOffset8Desktop: true,
            isOffset9Desktop: true,
            isOffset10Desktop: true,
            isOffset11Desktop: true,
            isOffset12Desktop: true,
        }
        const expected = {
            'is-full-desktop': true,
            'is-narrow-desktop': true,
            'is-three-quarters-desktop': true,
            'is-two-thirds-desktop': true,
            'is-half-desktop': true,
            'is-one-third-desktop': true,
            'is-one-quarter-desktop': true,
            'is-1-desktop': true,
            'is-2-desktop': true,
            'is-3-desktop': true,
            'is-4-desktop': true,
            'is-5-desktop': true,
            'is-6-desktop': true,
            'is-7-desktop': true,
            'is-8-desktop': true,
            'is-9-desktop': true,
            'is-10-desktop': true,
            'is-11-desktop': true,
            'is-12-desktop': true,
            'is-offset-three-quarters-desktop': true,
            'is-offset-two-thirds-desktop': true,
            'is-offset-half-desktop': true,
            'is-offset-one-third-desktop': true,
            'is-offset-one-quarter-desktop': true,
            'is-offset-1-desktop': true,
            'is-offset-2-desktop': true,
            'is-offset-3-desktop': true,
            'is-offset-4-desktop': true,
            'is-offset-5-desktop': true,
            'is-offset-6-desktop': true,
            'is-offset-7-desktop': true,
            'is-offset-8-desktop': true,
            'is-offset-9-desktop': true,
            'is-offset-10-desktop': true,
            'is-offset-11-desktop': true,
            'is-offset-12-desktop': true,
        }

        expect(Grid.getDesktopModifiers(props))
            .toEqual(expected);
    });
})