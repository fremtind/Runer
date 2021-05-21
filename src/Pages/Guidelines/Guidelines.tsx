import React, { useEffect } from 'react';
import './Guidelines.scss';
import TestGenerator from "../../Components/TestGenerator";

const Guidelines = () => {
    useEffect(() => {
        document.title = 'Retningslinjer';
    }, []);

    return (
        <section className="guidelines">
            You are in Guidelines
        </section>
    );
};

export default Guidelines;
