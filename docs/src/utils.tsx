export const isActive = (location, url) => {
    return location.pathname.includes(url) ? true : false;
}