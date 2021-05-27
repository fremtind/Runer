import { nanoid } from "nanoid";
import React from "react";
import { useLocation } from "react-router";
import { getSessionCookie, setSessionCookie } from "./cookie";

interface State {
    testSession: string;
    clientId: string;
}

const SessionContext = React.createContext<State | undefined>(undefined);

const SessionProvider: React.FC = ({ children }) => {
    let cookie = getSessionCookie();

    const { search } = useLocation();
    const urlParams = new URLSearchParams(search);
    cookie = urlParams.get("sid") ?? cookie ?? nanoid();

    setSessionCookie(cookie);

    const value = { clientId: cookie, testSession: nanoid() };
    return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

const useSession = () => {
    const context = React.useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within a SessionProvider");
    }

    return context;
};

export { SessionProvider, useSession };
