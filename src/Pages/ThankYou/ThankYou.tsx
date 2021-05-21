import React, { useEffect } from 'react';
import './ThankYou.scss';

const ThankYou = () => {
    useEffect(() => {
        document.title = 'ThankYou';
    }, []);

    return (
        <section className="guidelines">
            Takk! Da var du ferdig!
        </section>
    );
};

export default ThankYou;
