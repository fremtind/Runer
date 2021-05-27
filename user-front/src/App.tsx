import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SessionProvider } from "./common/sessionContext";

import "./App.scss";

const Welcome = React.lazy(() => import("./Pages/Welcome"));
const Guidelines = React.lazy(() => import("./Pages/Guidelines"));
const Exercise = React.lazy(() => import("./Pages/Exercise"));
const ThankYou = React.lazy(() => import("./Pages/ThankYou"));

const App = () => {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <SessionProvider>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/retningslinjer" component={Guidelines} />
                        <Route exact path="/lesetester" component={Exercise} />
                        <Route exact path="/tusen-takk" component={ThankYou} />
                    </Switch>
                </SessionProvider>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
