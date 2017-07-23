export const isActive = (location, url) => !!location.pathname.includes(url);

export declare namespace Docs {
    export interface Row {
        prop: string,
        type: string,
        description?: string | JSX.Element
    }
}
