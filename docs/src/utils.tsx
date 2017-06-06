export const isActive = (location, url) => {
    return location.pathname.includes(url) ? true : false;
}

export declare namespace Docs {
    export interface Row {
        prop: string,
        type: string,
        description?: string | JSX.Element
    }
}