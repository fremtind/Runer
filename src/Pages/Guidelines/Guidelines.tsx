import React, { useEffect } from "react";
import "./Guidelines.scss";

const Guidelines = () => {
    useEffect(() => {
        document.title = "Retningslinjer | Runer";
    }, []);

    return <section className="guidelines">You are in Guidelines</section>;
};

export default Guidelines;
