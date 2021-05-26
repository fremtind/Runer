const COOKIE_NAME = "fremtind-lesbarhet-session";

const getCookie = (name = COOKIE_NAME) => {
    const cookie = document.cookie
        // split a string of cookies into array of cookies
        .split(";")
        // split cookies into [name, value]
        .map((s) => s.trim().split("="))
        // find our golden nugget
        .find((c) => c[0] === name);

    if (!cookie) {
        return undefined;
    }

    return cookie;
};

export const getSessionCookie = () => {
    const cookie = getCookie();

    if (cookie) {
        return cookie[1] as string;
    }

    return undefined;
};

// 30 days
const DEFAULT_MAX_AGE = 2592000;

export const setSessionCookie = (session: string, maxAge = DEFAULT_MAX_AGE, name = COOKIE_NAME) => {
    const cookie = [];

    cookie.push(`${name}=${session}`);
    cookie.push(`max-age=${maxAge}`);
    document.cookie = cookie.join(";");
};
