import React, { useEffect } from "react";
import "./ThankYou.scss";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import history from "../../Utilities/History";

const ThankYou = () => {
    useEffect(() => {
        document.title = "Ferdig | Runer";
    }, []);

    return (
        <section className="thankyou">
            <h1>Takk! Da var du ferdig!</h1>
            <img src="http://i.imgur.com/62M6N.gif" />
            <PrimaryButton
                onClick={() => {
                    history.push("/");
                }}
            >
                Gå til hjemmeside
            </PrimaryButton>
        </section>
    );
};

export default ThankYou;
