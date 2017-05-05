export interface IAlignment {
    isCentered?: boolean,
    isRight?: boolean,
}

export interface ISizes {
    isSmall?: boolean,
    isMedium?: boolean,
    isLarge?: boolean,
}

export interface IStyle {
    isBoxed?: boolean,
    isToggle?: boolean,
    isFullwidth?: boolean,
}

export interface IState {
    isActive?: boolean,
    isCurrent?: boolean,
}

export interface IModifiers extends
    IAlignment,
    ISizes,
    IStyle,
    IState {
}

export interface IPageControl {
    isPrevious?: boolean,
    isNext?: boolean,
}

export interface IRender {
    render?: Function
}

export interface NonHTMLProps extends
    IModifiers, IRender, IPageControl {
}