import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

const Welcome = React.lazy(() => import("./Pages/Welcome"));
const Guidelines = React.lazy(() => import("./Pages/Guidelines"));
const Exercise = React.lazy(() => import("./Pages/Exercise"));
const ThankYou = React.lazy(() => import("./Pages/ThankYou"));

const App = () => {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/guidelines" component={Guidelines} />
                    <Route exact path="/exercise" component={Exercise} />
                    <Route exact path="/thankyou" component={ThankYou} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
