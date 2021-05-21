import React, { useEffect } from 'react';
import './Guidelines.scss';
import TestGenerator from "../../Components/TestGenerator";

const Guidelines = () => {
    useEffect(() => {
        document.title = 'Retningslinjer';
    }, []);

    return (
        <section className="guidelines">
            <TestGenerator text="
Hva lykke er?
Gå på en gressgrodd setervei
i tynne, tynne sommerklær,
klø sine ferske myggstikk
med doven ettertenksomhet
og være ung og meget rik
på uopplevet kjærlighet.
Å få et florlett spindelvev
som kjærtegn over munn og kinn
og tenke litt på vær og vind.
Be prestekravene om råd
og kanskje ja – og kanskje nei –
han elsker – elsker ikke meg.

Men ennå ikke kjenne deg." backgroundColor="black" fontColor="white" fontFamily="sans-serif" fontSize="16px"/>
        </section>
    );
};

export default Guidelines;
