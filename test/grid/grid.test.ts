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

describe.skip('get*Modifiers functions', () => {

})